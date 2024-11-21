import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import RichTextEditor from '../components/RichTextEditor';
import FileUpload from '../components/FileUpload';

interface FormData {
  name: string;
  category: string;
  content: string;
}

const categories = ['LAUNCHPAD', 'NOTICE', 'TEAM BUILD', 'BEARDATORIUM'];

export default function CreatePostPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onSubmit = async (data: FormData) => {
    const formData = {
      ...data,
      content,
      banner: selectedFile
    };
    console.log('Form submitted:', formData);
    navigate('/');
  };

  return (
    <div>
      {/* Hero Image Section */}
      <div className="relative h-[300px] mb-12">
        <img 
          src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80" 
          alt="Blog creation hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent">
          <div className="container mx-auto px-8 h-full flex items-center">
           
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select your name
              </label>
              <input
                type="text"
                {...register('name', { required: 'Name is required' })}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-[#FF4D4D] focus:ring-[#FF4D4D]"
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select category
              </label>
              <select
                {...register('category', { required: 'Category is required' })}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-[#FF4D4D] focus:ring-[#FF4D4D]"
              >
                <option value="">Select</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Banner image
              </label>
              <FileUpload onFileSelect={setSelectedFile} />
              <p className="mt-1 text-xs text-gray-500">Max. File Size: 30MB</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your article
              </label>
              <RichTextEditor content={content} onChange={setContent} />
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="px-6 py-2.5 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Preview
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#FF4D4D] text-white rounded-full hover:bg-[#FF3333] transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}