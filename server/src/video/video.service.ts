import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Video } from './entities/video.entity';
import { v2 as cloudinary } from 'cloudinary';

@Injectable()
export class VideoService {
    constructor(
        private configService: ConfigService,
        @InjectRepository(Video)
        private videoRepository: Repository<Video>
    ) {
        cloudinary.config({
            cloud_name: this.configService.get<string>('CLOUD_NAME'),
            api_key: this.configService.get<string>('CLOUDINARY_API_KEY'),
            api_secret: this.configService.get<string>('CLOUDINARY_API_SECRET'),
        });
    }

    async uploadVideo(file: Express.Multer.File, name: string, description: string) {
        try{
            const result = await cloudinary.uploader.upload(file.path, {
                resource_type: 'video',
            });

            const video = new Video();
            video.name = name;
            video.description = description;
            video.url = result.secure_url;
            return await this.videoRepository.save(video);
        } catch (error){
            console.error('Error uploading video:', error);
            throw new Error('Failed to upload video');
        }
    }

    async getAllVideos() {
        return this.videoRepository.find();
    }

    async deleteVideo(id: number) {
        try{
            const video = await this.videoRepository.findOne({ where: { id } });
            if(!video) {
                throw new Error('Video not Found');
            }

            const publicId = video.url.split('/').slice(-1)[0].split('_')[0];

            await cloudinary.uploader.destroy(publicId, { resource_type: 'video' });

            return await this.videoRepository.delete(id);
        } catch (error) {
            console.error('Error deleting video:', error);
            throw new Error('Failed to delete video');
        }
    }

    async updateVideo(id: number, updateData: { name?: string, description?: string }) {
        try{
            const video = await this.videoRepository.findOne({ where: { id } });
            if(!video) {
                throw new Error('Video not Found');
            }

            Object.assign(video, updateData);
            return await this.videoRepository.save(video);
        } catch (error) {
            console.error('Error updating Video:', error);
            throw new Error('Failed to Update Video');
        }
    }
}
