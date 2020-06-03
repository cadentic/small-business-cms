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
  public function sendData(){
    $path1 = 'client_main_content.json';
    $path2 = 'json/FormData/client_main1.json';
    $datae = file_get_contents($path1);
    $data = json_decode($datae);
    $modi = file_get_contents($path2);
    $mod = json_decode($modi);
    $data->banner->banner1->bg_img = $mod->image1 ==null ? $data->banner->banner1->bg_img : 'banners/main/'.$mod->image1;
    $data->banner->banner1->title = $mod->b1_t == null ? $data->banner->banner1->title : $mod->b1_t;
    $data->banner->banner1->link[0]->text = $mod->b1_l1 == null ? $data->banner->banner1->link[0]->text : $mod->b1_l1;
    $data->banner->banner1->link[1]->text = $mod->b1_l2 == null ? $data->banner->banner1->link[1]->text : $mod->b1_l2;
    $data->banner->banner1->link[2]->text = $mod->b1_l3 == null ? $data->banner->banner1->link[2]->text : $mod->b1_l3;
    $data->banner->banner1->link[3]->text = $mod->b1_l4 == null ? $data->banner->banner1->link[3]->text : $mod->b1_l4;
    $data->banner->banner1->link[4]->text = $mod->b1_l5 == null ? $data->banner->banner1->link[4]->text : $mod->b1_l5;
    $data->banner->banner2->bg_img = $mod->image2==null? $data->banner->banner2->bg_img: 'banners/main/'.$mod->image2;
    $data->banner->banner2->title = $mod->b2_t == null ? $data->banner->banner2->title:$mod->b2_t;
    $data->banner->banner2->link[0]->text = $mod->b2_l1 == null ? $data->banner->banner2->link[0]->text : $mod->b2_l1;
    $data->banner->banner2->link[1]->text = $mod->b2_l2 == null ? $data->banner->banner2->link[1]->text : $mod->b2_l2;
    $data->banner->banner3->bg_img[0] = $mod->image3==null? $data->banner->banner3->bg_img[0] : 'url(banners/main/'.$mod->image3.')';
    $data->banner->banner3->bg_img[1] = $mod->image4==null? $data->banner->banner3->bg_img[1] : 'url(banners/main/'.$mod->image4.')';
    $data->banner->banner3->bg_img[2] = $mod->image5==null? $data->banner->banner3->bg_img[2] : 'url(banners/main/'.$mod->image5.')';
    $data->banner->banner3->bg_img[3] = $mod->image6==null? $data->banner->banner3->bg_img[3] : 'url(banners/main/'.$mod->image6.')';
    $data->banner->banner3->title = $mod->b3_t == null? $data->banner->banner3->title : $mod->b3_t;
    $data->banner->banner3->content = $mod->b3_c == null? $data->banner->banner3->content : $mod->b3_c;
    $data->banner->banner3->link[0]->text = $mod->b3_l1 == null ? $data->banner->banner3->link[0]->text : $mod->b3_l1;
    $data->banner->banner3->link[1]->text = $mod->b3_l2 == null ? $data->banner->banner3->link[1]->text : $mod->b3_l2;
    $data->video->player->src = $mod->video == null ? $data->video->player->src : 'banners/main/'.$mod->video;
    $data->video->detail->title = $mod->b4_t == null ? $data->video->detail->title : $mod->b4_t;
    $data->video->detail->content = $mod->b4_c==null ? $data->video->detail->content : $mod->b4_c;
    file_put_contents($path1,json_encode($data));
  }
  public function formPost(Request $request){
    if($request->session()->get('role')!='admin'){
      return back();
    }
    if($request->Submit == 'Submit'){
      $path = 'json/FormData/client_main1.json';
      $imagename1=null;$imagename2=null;$imagename3=null;$imagename4=null;$imagename5=null;$imagename6=null;$videoname=null;
      if($request->hasFile('image1')){
        $image = $request['image1'];
        $imagename1=$image->getClientOriginalName();
        $path1 = 'banners/main';
        $image->move($path1,$imagename1);
      }
      if($request->hasFile('image2')){
        $image = $request['image2'];
        $imagename2=$image->getClientOriginalName();
        $path1 = 'banners/main';
        $image->move($path1,$imagename2);
      }
      if($request->hasFile('image3')){
        $image = $request['image3'];
        $imagename3=$image->getClientOriginalName();
        $path1 = 'banners/main';
        $image->move($path1,$imagename3);
      }
      if($request->hasFile('image4')){
        $image = $request['image4'];
        $imagename4=$image->getClientOriginalName();
        $path1 = 'banners/main';
        $image->move($path1,$imagename4);
      }
      if($request->hasFile('image5')){
        $image = $request['image5'];
        $imagename5=$image->getClientOriginalName();
        $path1 = 'banners/main';
        $image->move($path1,$imagename5);
      }
      if($request->hasFile('image6')){
        $image = $request['image6'];
        $imagename6=$image->getClientOriginalName();
        $path1 = 'banners/main';
        $image->move($path1,$imagename6);
      }
      if($request->hasFile('video')){
        $image = $request['video'];
        $videoname=$image->getClientOriginalName();
        $path1 = 'banners/main';
        $image->move($path1,$videoname);
      }
      $data = array('id'=>'1','b1_t'=>$request->b1_t,'b1_l1'=>$request->b1_l1,'b1_l2'=>$request->b1_l2,
                'b1_l3'=>$request->b1_l3,'b1_l4'=>$request->b1_l4,'b1_l5'=>$request->b1_l5,'b2_t'=>$request->b2_t,
                'b2_l1'=>$request->b2_l1,'b2_l2'=>$request->b2_l2,'b3_t'=>$request->b3_t,'b3_c'=>$request->b3_c,
                'b3_l1'=>$request->b3_l1,'b3_l2'=>$request->b3_l2,'b4_c'=>$request->b4_c,'b4_t'=>$request->b4_t,'image1'=>$imagename1,
                'image2'=>$imagename2,'image3'=>$imagename3,'image4'=>$imagename4,'image5'=>$imagename5,
                'image6'=>$imagename6,'video'=>$videoname);
      file_put_contents($path,json_encode($data));
      $this->sendData();
      return 'Form Submitted Successfully';
    }
    else if($request->Submit == 'Save as Draft'){
      $path = 'json/draft_main/draft_main.json';
      $path1 = 'json/draft_main';
      $imagename1=null;$imagename2=null;$imagename3=null;$imagename4=null;$imagename5=null;$imagename6=null;$videoname=null;
      if($request->hasFile('image1')){
        $image = $request['image1'];
        $imagename1=$image->getClientOriginalName();
        $image->move($path1,$imagename1);
      }
      if($request->hasFile('image2')){
        $image = $request['image2'];
        $imagename2=$image->getClientOriginalName();
        $image->move($path1,$imagename2);
      }
      if($request->hasFile('image3')){
        $image = $request['image3'];
        $imagename3=$image->getClientOriginalName();
        $image->move($path1,$imagename3);
      }
      if($request->hasFile('image4')){
        $image = $request['image4'];
        $imagename4=$image->getClientOriginalName();
        $image->move($path1,$imagename4);
      }
      if($request->hasFile('image5')){
        $image = $request['image5'];
        $imagename5=$image->getClientOriginalName();
        $image->move($path1,$imagename5);
      }
      if($request->hasFile('image6')){
        $image = $request['image6'];
        $imagename6=$image->getClientOriginalName();
        $image->move($path1,$imagename6);
      }
      if($request->hasFile('video')){
        $image = $request['video'];
        $videoname=$image->getClientOriginalName();
        $image->move($path1,$videoname);
      }
      $data = array('id'=>'1','b1_t'=>$request->b1_t,'b1_l1'=>$request->b1_l1,'b1_l2'=>$request->b1_l2,
                'b1_l3'=>$request->b1_l3,'b1_l4'=>$request->b1_l4,'b1_l5'=>$request->b1_l5,'b2_t'=>$request->b2_t,
                'b2_l1'=>$request->b2_l1,'b2_l2'=>$request->b2_l2,'b3_t'=>$request->b3_t,'b3_c'=>$request->b3_c,
                'b3_l1'=>$request->b3_l1,'b3_l2'=>$request->b3_l2,'b4_c'=>$request->b4_c,'b4_t'=>$request->b4_t,'image1'=>$imagename1,
                'image2'=>$imagename2,'image3'=>$imagename3,'image4'=>$imagename4,'image5'=>$imagename5,
                'image6'=>$imagename6,'video'=>$videoname);
      file_put_contents($path,json_encode($data));
      return 'Form Saved as Draft';
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
