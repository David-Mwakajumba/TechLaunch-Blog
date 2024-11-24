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

    function index(){
        $blogPosts = Blog::with('user','category')->get();
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

    function store(Request $request){
        
        $request->validate([
            'title' => ['required'],
            'name' => 'required | exists:users,id',
            'category' => 'required|exists:categories,id',
            'description' => 'required|min:20',
            'image' => 'required|image|max:30720'
        ]);

        // Store the image
        $path = $request->file('image')->store('images', 'public');

        Blog::create([
        'title' => $request->title,
        'user_id' => $request->name,
        'category_id' => $request->category,
         'description' => $request->description,
         'image' => $path,
         'slug' => str_replace(' ', '-', $request->title).'_'.sha1(time())
       ]);
    }

    function show($slug){
        $post = Blog::with('category','user')->where('slug',$slug)->firstOrFail();
        $relatedPosts = Blog::with('category','user')
        ->where('category_id',$post->category_id)
        ->where('id','!=',$post->id)
        ->get();
        return Inertia::render('BlogPostPage',[
            'post' => $post,
           'relatedPosts' => $relatedPosts
        ]);
    }
}
