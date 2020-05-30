<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LandingPages extends Controller
{
  public function gotoFormA(Request $request){
    if($request->session()->get('role')=='admin'){
      return view('adminForms/mainForm');
    }
    return back();
  }
  public function formPost(Request $request){
    if($request->session()->get('role')!='admin'){
      return back();
    }
    if($request->Submit == 'Submit'){
      $this->validate($request,[
        'title' => 'required',
        'bg_img.*' => 'max:4096|image'
      ]);
      $indexfile = file_get_contents('json/Numbers/nummain.json');
      $index = json_decode($indexfile);
      $index = $index + 1;
      file_put_contents('json/Numbers/nummain.json',json_encode($index));
      $image = $request['bg_img'];
      $imagename = $image->getClientOriginalName();
      $path = 'banners/main';
      $image->move($path,$imagename);
      $banner = array('id'=>$index, 'title'=>$request->title , 'bg_img'=>$imagename, 'link'=>$request->link);
      $file_path = 'json/FormData/client_main1.json';
      $file = file_get_contents($file_path);
      $json = json_decode($file);
      $json[] = $banner;
      file_put_contents('json/FormData/client_main1.json',json_encode($json));
      return 'Form Submitted Successfully';
    }
    else if($request->Submit == 'Save as Draft'){
      $this->validate($request,[
        'title' => 'required',
        'bg_img' => 'nullable',
        'bg_img.*' => 'max:4096|image'
      ]);
      if($request->hasFile('bg_img')){
        $image = $request['bg_img'];
        $imagename = $image->getClientOriginalName();
        $path = 'json/draft_main';
        $image->move($path,$imagename);
      }
      $banner = array('id'=>'1','title'=>$request->title,'bg_img'=>$imagename,'link'=>$request->link);
      $file_path = 'json/draft_main/draft_main.json';
      file_put_contents($file_path,json_encode($banner));
      return 'Draft Saved';
    }
  }

  public function innerForm(Request $request){
    if($request->session()->get('role')=='admin'){
      return view('adminForms/innerForm');
    }
    return back();
  }
  public function innerPost(Request $request){
    if($request->session()->get('role')!='admin'){
      return back();
    }
    if($request->submit == 'Submit'){
      $this->validate($request,[
        'title' => 'required',
        'bg_img.*' => 'max:4096|image',
        'description' => 'required'
      ]);
      $indexfile = file_get_contents('json/Numbers/numinner.json');
      $index = json_decode($indexfile);
      $index = $index + 1;
      file_put_contents('json/Numbers/numinner.json',json_encode($index));
      $image=$request->get('bg_img');
      $name='Image'.$index.'.'.explode('/',explode(':',substr($image,0,strpos($image,';')))[1])[1];
      $data = array('id'=>$index,'title'=>$request->title,'bgcolor'=>$request->bgcolor,'bg_img'=>$name,'subtitle'=>$request->subtitle,'description'=>$request->description);
      $file_path = 'json/FormData/inner_f1.json';
      $file = file_get_contents($file_path);
      $json = json_decode($file);
      $json[] = $data;
      file_put_contents($file_path,json_encode($json));
      \Image::make($request->get('bg_img'))->save(public_path('banners/inner/').$name);
      $image = new FileUpload();
      $image->image_name = $name;
      $image->save();
      return 'Form Submitted Successfully!';
    }
    else if($request->submit=='Draft'){
      $data = array('id'=>'1','title'=>$request->title,'bgcolor'=>$request->bgcolor,'bg_img'=>'Image1.jpeg','subtitle'=>$request->subtitle,'description'=>$request->description);
      $file_path = 'json/draft_inner/draft_inner.json';
      file_put_contents($file_path,json_encode($data));
      if($request->get('bg_img')){
        $image=$request->get('bg_img');
        $name=time().'.'.explode('/',explode(':',substr($image,0,strpos($image,';')))[1])[1];
        Image::make($request->get('bg_img'))->save(public_path('json/draft_inner/').$name);
        $image = new FileUpload();
        $image->image_name = $name;
        $image->save();
        return 'Form Saved as Draft';
      }
    }
  }

  public function innerForm2(){
    if($request->session()->get('role')=='admin'){
      return view('adminForms/innerForm2');
    }
    return back();
  }
  public function innerPost2(Request $request){
    if($request->session()->get('role')!='admin'){
      return back();
    }
    if($request->Submit == 'Submit'){
      $video = $request['video'];
      $videoname = $video->getClientOriginalName();
      $path = 'banners/inner2';
      $video->move($path,$videoname);
      $indexfile = file_get_contents('json/Numbers/numinner2.json');
      $index = json_decode($indexfile);
      $index = $index + 1;
      file_put_contents('json/Numbers/numinner2.json',json_encode($index));
      $filepath = 'json/FormData/inner_f2.json';
      $data = file_get_contents($filepath);
      $json = json_decode($data);
      $array = array('id'=>$index,'title'=>$request->title,'video'=>$videoname,'subtitle'=>$request->subtitle,'description'=>$request->description);
      $json[] = $array;
      file_put_contents($filepath,json_encode($json));
      return 'Form Submitted Successfully';

    }
    else if($request->Submit=='Save as Draft'){
      if($request->hasFile('video')){
        $video = $request['video'];
        $videoname = $video->getClientOriginalName();
        $path = 'json/draft_inner2';
        $video->move($path,$videoname);
      }
      else{
        $videoname='null';
      }
      $indexfile = file_get_contents('json/Numbers/numinner2.json');
      $index = json_decode($indexfile);
      $index = $index + 1;
      file_put_contents('json/Numbers/numinner2.json',json_encode($index));
      $filepath = 'json/draft_inner2/draft_inner2.json';
      $array = array('id'=>$index,'title'=>$request->title,'video'=>$videoname,'subtitle'=>$request->subtitle,'description'=>$request->description);
      file_put_contents($filepath,json_encode($array));
      return 'Form Saved as Draft';
    }
  }

  public function innerForm3(){
    if($request->session()->get('role')=='admin'){
      return view('adminForms/innerForm3');
    }
    return back();
  }
  public function innerPost3(Request $request){
    if($request->session()->get('role')!='admin'){
      return back();
    }
    if($request->Submit == 'Submit'){
      $video = $request['video'];
      $videoname = $video->getClientOriginalName();
      $path = 'banners/inner3';
      $video->move($path,$videoname);
      $image = $request['image'];
      $imagename = $image->getClientOriginalName();
      $image->move($path,$imagename);
      $indexfile = file_get_contents('json/Numbers/numinner3.json');
      $index = json_decode($indexfile);
      $index = $index + 1;
      file_put_contents('json/Numbers/numinner3.json',json_encode($index));
      $filepath = 'json/FormData/inner_f3.json';
      $data = file_get_contents($filepath);
      $json = json_decode($data);
      $array = array('id'=>$index,'title'=>$request->title,'video'=>$videoname,'image'=>$imagename,'subtitle'=>$request->subtitle,'description'=>$request->description);
      $json[] = $array;
      file_put_contents($filepath,json_encode($json));
      return 'Form Submitted Successfully';

    }
    else if($request->Submit=='Save as Draft'){
      if($request->hasFile('video')){
        $video = $request['video'];
        $videoname = $video->getClientOriginalName();
        $path = 'json/draft_inner3';
        $video->move($path,$videoname);
      }
      else{
        $videoname='null';
      }
      if($request->hasFile('image')){
        $image = $request['image'];
        $imagename = $image->getClientOriginalName();
        $path = 'json/draft_inner3';
        $image->move($path,$imagename);
      }
      else{
        $imagename='null';
      }
      $indexfile = file_get_contents('json/Numbers/numinner3.json');
      $index = json_decode($indexfile);
      $index = $index + 1;
      file_put_contents('json/Numbers/numinner3.json',json_encode($index));
      $filepath = 'json/draft_inner3/draft_inner3.json';
      $array = array('id'=>$index,'title'=>$request->title,'video'=>$videoname,'image'=>$imagename,'subtitle'=>$request->subtitle,'description'=>$request->description);
      file_put_contents($filepath,json_encode($array));
      return 'Form Saved as Draft';
    }
  }

  public function innerForm4(Request $request){
    if($request->session()->get('role')=='admin'){
      return view('adminForms/innerForm4');
    }
    return back();
  }
  public function innerPost4(Request $request){
    if($request->session()->get('role')!='admin'){
      return back();
    }
    if($request->Submit == 'Submit'){
      $video = $request['video'];
      $videoname = $video->getClientOriginalName();
      $path = 'banners/inner4';
      $video->move($path,$videoname);
      $image = $request['image'];
      $imagename = $image->getClientOriginalName();
      $image->move($path,$imagename);
      $indexfile = file_get_contents('json/Numbers/numinner4.json');
      $index = json_decode($indexfile);
      $index = $index + 1;
      file_put_contents('json/Numbers/numinner3.json',json_encode($index));
      $filepath = 'json/FormData/inner_f4.json';
      $data = file_get_contents($filepath);
      $json = json_decode($data);
      $array = array('id'=>$index,'title'=>$request->title,'video'=>$videoname,'image'=>$imagename,'subtitle'=>$request->subtitle,'description'=>$request->description);
      $json[] = $array;
      file_put_contents($filepath,json_encode($json));
      return 'Form Submitted Successfully';

    }
    else if($request->Submit=='Save as Draft'){
      if($request->hasFile('video')){
        $video = $request['video'];
        $videoname = $video->getClientOriginalName();
        $path = 'json/draft_inner4';
        $video->move($path,$videoname);
      }
      else{
        $videoname='null';
      }
      if($request->hasFile('image')){
        $image = $request['image'];
        $imagename = $image->getClientOriginalName();
        $path = 'json/draft_inner4';
        $image->move($path,$imagename);
      }
      else{
        $imagename='null';
      }
      $indexfile = file_get_contents('json/Numbers/numinner4.json');
      $index = json_decode($indexfile);
      $index = $index + 1;
      file_put_contents('json/Numbers/numinner4.json',json_encode($index));
      $filepath = 'json/draft_inner4/draft_inner4.json';
      $array = array('id'=>$index,'title'=>$request->title,'video'=>$videoname,'image'=>$imagename,'subtitle'=>$request->subtitle,'description'=>$request->description);
      file_put_contents($filepath,json_encode($array));
      return 'Form Saved as Draft';
    }
  }

  public function innerFormBlank(){
    if($request->session()->get('role')=='admin'){
      return view('adminForms/innerFormBlank');
    }
    return back();
  }
  public function innerPostBlank(Request $request){
    if($request->session()->get('role')!='admin'){
      return back();
    }
    if($request->Submit == 'Submit'){
      $video = $request['video'];
      $videoname = $video->getClientOriginalName();
      $path = 'banners/blank';
      $video->move($path,$videoname);
      $image = $request['image'];
      $imagename = $image->getClientOriginalName();
      $image->move($path,$imagename);
      $indexfile = file_get_contents('json/Numbers/numblank.json');
      $index = json_decode($indexfile);
      $index = $index + 1;
      file_put_contents('json/Numbers/numblank.json',json_encode($index));
      $filepath = 'json/FormData/inner_blank1.json';
      $data = file_get_contents($filepath);
      $json = json_decode($data);
      $array = array('id'=>$index,'title'=>$request->title,'video'=>$videoname,'image'=>$imagename,'subtitle'=>$request->subtitle,'description'=>$request->description);
      $json[] = $array;
      file_put_contents($filepath,json_encode($json));
      return 'Form Submitted Successfully';

    }
    else if($request->Submit=='Save as Draft'){
      if($request->hasFile('video')){
        $video = $request['video'];
        $videoname = $video->getClientOriginalName();
        $path = 'json/draft_blank';
        $video->move($path,$videoname);
      }
      else{
        $videoname='null';
      }
      if($request->hasFile('image')){
        $image = $request['image'];
        $imagename = $image->getClientOriginalName();
        $path = 'json/draft_blank';
        $image->move($path,$imagename);
      }
      else{
        $imagename='null';
      }
      $indexfile = file_get_contents('json/Numbers/numblank.json');
      $index = json_decode($indexfile);
      $index = $index + 1;
      file_put_contents('json/Numbers/numblank.json',json_encode($index));
      $filepath = 'json/draft_blank/draft_blank.json';
      $array = array('id'=>$index,'title'=>$request->title,'video'=>$videoname,'image'=>$imagename,'subtitle'=>$request->subtitle,'description'=>$request->description);
      file_put_contents($filepath,json_encode($array));
      return 'Form Saved as Draft';
    }
  }

  public function innerFormBlank1(){
    if($request->session()->get('role')=='admin'){
      return view('adminForms/innerFormBlank1');
    }
    return back();
  }
  public function innerPostBlank1(Request $request){
    if($request->session()->get('role')!='admin'){
      return back();
    }
    if($request->Submit == 'Submit'){
      $video = $request['video'];
      $videoname = $video->getClientOriginalName();
      $path = 'banners/blank2';
      $video->move($path,$videoname);
      $image = $request['image'];
      $imagename = $image->getClientOriginalName();
      $image->move($path,$imagename);
      $indexfile = file_get_contents('json/Numbers/numblank2.json');
      $index = json_decode($indexfile);
      $index = $index + 1;
      file_put_contents('json/Numbers/numblank2.json',json_encode($index));
      $filepath = 'json/FormData/inner_blank2.json';
      $data = file_get_contents($filepath);
      $json = json_decode($data);
      $array = array('id'=>$index,'title'=>$request->title,'video'=>$videoname,'image'=>$imagename,'subtitle'=>$request->subtitle,'description'=>$request->description);
      $json[] = $array;
      file_put_contents($filepath,json_encode($json));
      return 'Form Submitted Successfully';

    }
    else if($request->Submit=='Save as Draft'){
      if($request->hasFile('video')){
        $video = $request['video'];
        $videoname = $video->getClientOriginalName();
        $path = 'json/draft_blank2';
        $video->move($path,$videoname);
      }
      else{
        $videoname='null';
      }
      if($request->hasFile('image')){
        $image = $request['image'];
        $imagename = $image->getClientOriginalName();
        $path = 'json/draft_blank2';
        $image->move($path,$imagename);
      }
      else{
        $imagename='null';
      }
      $indexfile = file_get_contents('json/Numbers/numblank2.json');
      $index = json_decode($indexfile);
      $index = $index + 1;
      file_put_contents('json/Numbers/numblank2.json',json_encode($index));
      $filepath = 'json/draft_blank2/draft_blank2.json';
      $array = array('id'=>$index,'title'=>$request->title,'video'=>$videoname,'image'=>$imagename,'subtitle'=>$request->subtitle,'description'=>$request->description);
      file_put_contents($filepath,json_encode($array));
      return 'Form Saved as Draft';
    }
  }

}
