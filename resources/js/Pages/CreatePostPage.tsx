import React, { MouseEventHandler, useState } from 'react';
import { useForm } from 'react-hook-form';
import RichTextEditor from '../components/RichTextEditor';
import FileUpload from '../components/FileUpload';
import { Link, router, usePage } from '@inertiajs/react';
import { Category, CreatePostPageProps, User } from '@/types';
import Layout from '@/components/Layout';

interface FormData {
  name: string;
  category: string;
  content: string;
}





export default function CreatePostPage({ categories, users }: CreatePostPageProps) {
  // const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  // const [content, setContent] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string>('');

  const { errors } = usePage().props;

  const [values, setValues] = useState({
    title: null,
    name: null,
    category: null,
    description: "",
    image: null
  })


  function handleChange(e:any) {
    setValues(values => ({
      ...values,
      [e.target.id]: e.target.value,
    }))
  }


  const handleDescriptionChange = (content: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      description: content, // Update description
    }));
  };

  const handleFileUpload = (file: File) => {
    values.image = file//fix me im not working
    setFileError('');
    if(file.type == 'image/jpeg'){
       values.image = file
    }else{
      setFileError('Only images are allowed');
    }
  
  }

  const handleSubmit = async (e:  React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
   router.post('/blog', values)
    // console.log(values)
  }

  return (
    <Layout>
    <div>
      {/* Hero Image Section */}
      <div className="relative h-[300px] mb-12">
        {/* <img 
          src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80" 
          alt="Blog creation hero" 
          className="w-full h-full object-cover"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent">
          <div className="container mx-auto px-8 h-full flex items-center">
       
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input type="text"  value={values.title || ""} id="title" 
              onChange={handleChange} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-[#FF4D4D] focus:ring-[#FF4D4D]"/>
              {errors.title && <div className="mt-1 text-sm text-red-600">{errors.title}</div>}
              
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select your name
              </label>
              <select  value={values.name || ""} id="name" onChange={handleChange}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-[#FF4D4D] focus:ring-[#FF4D4D]"
              >
                <option value="">Select</option>
                {users.map((user: User) => (
                  <option key={user?.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </select>
              {errors.name && <div className="mt-1 text-sm text-red-600">{errors.name}</div>}
              
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select category
              </label>
              <select value={values.category || ""} id="category" onChange={handleChange}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-[#FF4D4D] focus:ring-[#FF4D4D]"
              >
                <option value="">Select</option>
                {categories.map((category: Category) => (
                  <option key={category?.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              {errors.category && <div className="mt-1 text-sm text-red-600">{errors.category}</div>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Banner image
              </label>
              <FileUpload onFileSelect={(e) => handleFileUpload(e)} />
              <p className="mt-1 text-xs text-gray-500">Max. File Size: 30MB</p>
              {errors.image && <div className="mt-1 text-sm text-red-600">{errors.image}</div>}
            </div> 

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your article
              </label>
              {errors.description && <div className="mt-1 text-sm text-red-600">{errors.description}</div>}
              <RichTextEditor  value={values.description} onChange={handleDescriptionChange} />
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <Link
                href="/"
                className="px-6 py-2.5 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Preview
              </Link>
              <button
              onClick={handleSubmit}
                type="button"
                className="px-6 py-2.5 bg-[#FF4D4D] text-white rounded-full hover:bg-[#FF3333] transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}