import React, {
    FormEventHandler,
    MouseEventHandler,
    useEffect,
    useState,
} from "react";
import RichTextEditor from "../components/RichTextEditor";
import FileUpload from "../components/FileUpload";
import { Link, router, usePage, useForm, Head } from "@inertiajs/react";
import { Category, CreatePostPageProps, User } from "@/types";
import Layout from "@/components/Layout";
import { showToast } from "@/utils/showToast";
import { Loader } from "lucide-react";
import cardheader from "../assets/card-header.png";
import Modal from "../components/SuccessModal";
interface FormData {
    name: string;
    category: string;
    content: string;
}

export default function CreatePostPage({
    categories,
    users,
}: CreatePostPageProps) {
    const [fileError, setFileError] = useState<string>("");
    const [fileName, setFileName] = useState<string>("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        title: null,
        name: null,
        category: null,
        description: "",
        image: null,
    });

    useEffect(() => {
        return () => {
            reset("category", "description", "title", "name");
        };
    }, []);

    const handleFileUpload = (file: File) => {
        const allowedImageTypes = ["image/jpeg", "image/png", "image/jpg"];

        setFileError("");
        if (!allowedImageTypes.includes(file.type)) {
            setFileError("Please select an image file (jpeg, png, jpg)");
            return;
        } else {
            data.image = file;
            setFileName(file.name);
        }
    };

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post("/blog", {
            onSuccess: () => {
                reset("category", "description", "title", "name");
                setFileName("");

                // Open the modal instead of toast
                setIsModalOpen(true);
            },
            onError: (err) => {
                // You could create a similar modal for errors
                console.log("Error creating post.", err);
            },
        });
    };

    return (
        <Layout>
            <Head title="Create Post" />
            <div>
                {/* Hero Image Section */}
                <div className="relative h-[300px] mb-12">
                    <img
                        src={cardheader}
                        alt="Blog creation hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent">
                        <div className="container mx-auto px-8 h-full flex items-center"></div>
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
                                <input
                                    type="text"
                                    value={data.title || ""}
                                    id="title"
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-[#FF4D4D] focus:ring-[#FF4D4D]"
                                />
                                {errors.title && (
                                    <div className="mt-1 text-sm text-red-600">
                                        {errors.title}
                                    </div>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Select your name
                                </label>
                                <select
                                    value={data.name || ""}
                                    id="name"
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-[#FF4D4D] focus:ring-[#FF4D4D]"
                                >
                                    <option value="">Select</option>
                                    {users.map((user: User) => (
                                        <option key={user?.id} value={user.id}>
                                            {user.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.name && (
                                    <div className="mt-1 text-sm text-red-600">
                                        {errors.name}
                                    </div>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Select category
                                </label>
                                <select
                                    value={data.category || ""}
                                    id="category"
                                    onChange={(e) =>
                                        setData("category", e.target.value)
                                    }
                                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-[#FF4D4D] focus:ring-[#FF4D4D]"
                                >
                                    <option value="">Select</option>
                                    {categories.map((category: Category) => (
                                        <option
                                            key={category?.id}
                                            value={category.id}
                                        >
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.category && (
                                    <div className="mt-1 text-sm text-red-600">
                                        {errors.category}
                                    </div>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Banner image
                                </label>
                                <FileUpload
                                    onFileSelect={(e) => handleFileUpload(e)}
                                />
                                <p className="mt-1 text-xs text-gray-500">
                                    Max. File Size: 30MB{" "}
                                    {fileName && (
                                        <span className="font-semibold text-green-500">
                                            ({fileName})
                                        </span>
                                    )}
                                </p>
                                {fileError && (
                                    <div className="mt-1 text-sm text-red-600">
                                        {fileError}
                                    </div>
                                )}
                                {errors.image && (
                                    <div className="mt-1 text-sm text-red-600">
                                        {errors.image}
                                    </div>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Your article
                                </label>
                                {errors.description && (
                                    <div className="mt-1 text-sm text-red-600">
                                        {errors.description}
                                    </div>
                                )}
                                <RichTextEditor
                                    value={data.description}
                                    onChange={(e) => setData("description", e)}
                                />
                            </div>

                            <div className="flex justify-end gap-4 pt-4">
                                <Link
                                    href="/"
                                    className="px-6 py-2.5 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors"
                                >
                                    Preview
                                </Link>
                                <button
                                    disabled={processing}
                                    onClick={handleSubmit}
                                    type="button"
                                    className="px-6 py-2.5 bg-[#FF4D4D] text-white rounded-full hover:bg-[#FF3333] transition-colors"
                                >
                                    {processing && (
                                        <Loader className="animate-spin" />
                                    )}
                                    {!processing && "Submit"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal for success message */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                message="Your blog post has been successfully created!"
                title="Post Published"
            />
        </Layout>
    );
}
