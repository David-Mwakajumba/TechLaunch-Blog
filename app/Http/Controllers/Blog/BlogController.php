<?php

namespace App\Http\Controllers\Blog;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\Category;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{

    function index(Request $request){
        if($request->category){
            $blogPosts = Blog::with('user','category')->where('category_id','=',$request->category)->get();
        }else{
            $blogPosts = Blog::with('user','category')->get();
        }
        return Inertia::render('Homepage',['blogPosts' => $blogPosts]);
    }
    function create(){
        $users = User::all();
        $categories = Category::all();
       return Inertia::render('CreatePostPage',
                [
                    'users' => $users,
                    'categories' => $categories
                ]);
    }

    /**
     * Validate and store a new blog post
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    function store(Request $request)
    {
        // Validate the request
        $request->validate([
            'title' => ['required'],
            'name' => 'required|exists:users,id',
            'category' => 'required|exists:categories,id',
            'description' => 'required|min:20',
            'image' => 'required|image|max:30720'
        ]);

        // Store the image
        $path = $request->file('image')->store('images', 'public');

        // Create the blog post
        Blog::create([
            'title' => $request->title,
            'user_id' => $request->name,
            'category_id' => $request->category,
            'description' => $request->description,
            'image' => $path,
            'slug' => str_replace(' ', '-', $request->title) . '_' . sha1(time())
        ]);
    }

    /**
     * Show a single blog post
     *
     * @param  string  $slug  The slug of the blog post
     * @return \Illuminate\Http\Response
     */
    function show($slug)
    {
        // Get the blog post
        $post = Blog::with('category','user')->where('slug',$slug)->firstOrFail();

        // Get the related blog posts (in the same category)
        $relatedPosts = Blog::with('category','user')
        ->where('category_id',$post->category_id)
        ->where('id','!=',$post->id)
        ->get();

        // Return the page with the post and the related posts
        return Inertia::render('BlogPostPage',[
            'post' => $post,
           'relatedPosts' => $relatedPosts
        ]);
    }
}
