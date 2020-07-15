<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LandingPages extends Controller
{
  public function gotoFormA(Request $request){
    if($request->session()->get('role')=='admin'){
      $path1 = 'json/client_main/'.$request->fileName.'.json';
      if(!file_exists($path1)){
        $myFile = fopen($path1,"w");
        copy('json/client_main/client_main_content.json',$path1);
      }
      return view('adminForms/mainForm')->with('fileName',$request->fileName);
    }
    return back();
  }
  public function sendData($fileName){
    $path1 = 'json/client_main/'.$fileName.'.json';
    $path2 = 'json/FormData/template_main/'.$fileName.'.json';
    $datae = file_get_contents($path1);
    $data = json_decode($datae);
    $modi = file_get_contents($path2);
    $mod = json_decode($modi);
    $data->banner->banner1->bg_img = $mod->image1 ==null ? $data->banner->banner1->bg_img : '../banners/main/'.$mod->image1;
    $data->banner->banner1->title = $mod->b1_t == null ? $data->banner->banner1->title : $mod->b1_t;
    if($mod->b1_l[0]!=null){
      $data->banner->banner1->link = array();
      for($i=0;$i<count($mod->b1_l);$i++){
        $object = new \stdclass();
        $object->id=$i;
        $object->text = $mod->b1_l[$i];
        $object->url = $mod->b1_u[$i];
        $data->banner->banner1->link[] = $object;
      }
    }
    $data->banner->banner2->bg_img = $mod->image2==null? $data->banner->banner2->bg_img: '../banners/main/'.$mod->image2;
    $data->banner->banner2->title = $mod->b2_t == null ? $data->banner->banner2->title:$mod->b2_t;
    if($mod->b2_l[0]!=null){
      $data->banner->banner2->link = array();
      for($i=0;$i<count($mod->b2_l);$i++){
        $object = new \stdclass();
        $object->id=$i;
        $object->text = $mod->b2_l[$i];
        $object->url = $mod->b2_u[$i];
        $data->banner->banner2->link[] = $object;
      }
    }
    if($mod->images!=null){
      $data->banner->banner3->bg_img=array();
      for($i=0;$i<count($mod->images);$i++){
        $string = 'url(../banners/main/'.$mod->images[$i].')';
        $data->banner->banner3->bg_img[] = $string;
      }
    }
    $data->banner->banner3->title = $mod->b3_t == null? $data->banner->banner3->title : $mod->b3_t;
    $data->banner->banner3->content = $mod->b3_c == null? $data->banner->banner3->content : $mod->b3_c;
    $data->banner->banner3->link[0]->text = $mod->b3_l1 == null ? $data->banner->banner3->link[0]->text : $mod->b3_l1;
    $data->banner->banner3->link[1]->text = $mod->b3_l2 == null ? $data->banner->banner3->link[1]->text : $mod->b3_l2;
    $data->video->player->src = $mod->video == null ? $data->video->player->src : '../banners/main/'.$mod->video;
    $data->video->detail->title = $mod->b4_t == null ? $data->video->detail->title : $mod->b4_t;
    $data->video->detail->content = $mod->b4_c==null ? $data->video->detail->content : $mod->b4_c;
    file_put_contents($path1,json_encode($data));
  }
  public function formPost(Request $request){
    if($request->session()->get('role')!='admin'){
      return back();
    }
    if($request->Submit == 'Submit'){
      $path = 'json/FormData/template_main/'.$request->fileName.'.json';
      if(!file_exists($path)){
        $myFile = fopen($path,"w");
      }
      $imagename1=null;$imagename2=null;$videoname=null;
      $images = array();
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
      if($request->b3_i!=null){
        foreach($request->b3_i as $image){
          $images[] = $image->getClientOriginalName();
          $image->move('banners/main',$image->getClientOriginalName());
        }
      }
      if($request->hasFile('video')){
        $image = $request['video'];
        $videoname=$image->getClientOriginalName();
        $path1 = 'banners/main';
        $image->move($path1,$videoname);
      }
      $data = array('id'=>'1','b1_t'=>$request->b1_t,'b1_l'=>$request->b1_l,'b1_u'=>$request->b1_u,'b2_t'=>$request->b2_t,
                'b2_l'=>$request->b2_l,'b2_u'=>$request->b2_u,'b3_t'=>$request->b3_t,'b3_c'=>$request->b3_c,
                'b3_l1'=>$request->b3_l1,'b3_l2'=>$request->b3_l2,'b4_c'=>$request->b4_c,'b4_t'=>$request->b4_t,'image1'=>$imagename1,
                'image2'=>$imagename2,'images'=>$images,'video'=>$videoname,'b5_l'=>$request->b5_l);
      file_put_contents($path,json_encode($data));
      $this->sendData($request->fileName);
      return 'Form Submitted Successfully';
    }
    else if($request->Submit == 'Save as Draft'){
      $path = 'json/draft_main/'.$request->fileName.'.json';
      $path1 = 'json/draft_main';
      $imagename1=null;$imagename2=null;$videoname=null;
      $images = array();
      if($request->b3_i!=null){
        foreach($request->b3_i as $image){
          $images[] = $image->getClientOriginalName();
          $image->move($path1,$image->getClientOriginalName());
        }
      }
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
      if($request->hasFile('video')){
        $image = $request['video'];
        $videoname=$image->getClientOriginalName();
        $image->move($path1,$videoname);
      }
      $data = array('id'=>'1','b1_t'=>$request->b1_t,'b1_l'=>$request->b1_l,'b1_u'=>$request->b1_u,'b2_t'=>$request->b2_t,
                'b2_l'=>$request->b2_l,'b2_u'=>$request->b2_u,'b3_t'=>$request->b3_t,'b3_c'=>$request->b3_c,
                'b3_l1'=>$request->b3_l1,'b3_l2'=>$request->b3_l2,'b4_c'=>$request->b4_c,'b4_t'=>$request->b4_t,'image1'=>$imagename1,
                'image2'=>$imagename2,'images'=>$images,'video'=>$videoname);
      file_put_contents($path,json_encode($data));
      return 'Form Saved as Draft';
    }
  }

  public function innerForm(Request $request){
    if($request->session()->get('role')=='admin'){
      $path1 = 'json/inner/'.$request->fileName.'.json';
      if(!file_exists($path1)){
        $myFile = fopen($path1,"w");
        copy('json/inner/inner.json',$path1);
      }
      return view('adminForms/innerForm')->with('filename',$request->fileName);
    }
    return back();
  }
  public function sendDataInner($fileName){
    $path1 = 'json/FormData/template_inner/'.$fileName.'.json';
    $path2 = 'json/inner/'.$fileName.'.json';
    $file = file_get_contents($path2);
    $data = json_decode($file);
    $file1= file_get_contents($path1);
    $mod = json_decode($file1);
    $data->section1->title = $mod->b1_t==null? $data->section1->title: $mod->b1_t;
    $data->section1->image = $mod->image1==null? $data->section1->image : '../banners/inner/'.$mod->image1;
    $data->section1->image_wrap = $data->section1->image;
    $data->section1->sub_title->text = $mod->b1_s==null?$data->section1->sub_title->text: $mod->b1_s;
    $data->section1->description->text1 = $mod->b1_d == null?$data->section1->description->text1: $mod->b1_d;
    $data->section1->description->text2 = $mod->b1_d == null?$data->section1->description->text2: null;
    $data->section1->description->text3 = $mod->b1_d == null?$data->section1->description->text3: null;
    if($mod->b2_n!=null){
      $num = $mod->b2_n;
      $num = $num % 7;
      if($num>3){
        $num = $num % 4;
        $data->section6->container2[$num]->link = $mod->b2_l;
        $data->section6->container2[$num]->description = $mod->b2_d;
        $data->section6->container2[$num]->image = '../banners/inner/'.$mod->image2;
      }
      else{
        $data->section6->container1[$num]->link = $mod->b2_l;
        $data->section6->container1[$num]->description = $mod->b2_d;
        $data->section6->container1[$num]->image = '../banners/inner/'.$mod->image2;
      }
    }
    if(($mod->b3_n!=null)){
      $num = $mod->b3_n;
      $num = $num % 3;
      $data->section8->container[$num]->background = '../banners/inner/'.$mod->image3;
      $data->section8->container[$num]->image = '../banners/inner/'.$mod->image3;
      $data->section8->container[$num]->title = $mod->b3_t;
      $data->section8->container[$num]->name = $mod->b3_c;
      $data->section8->container[$num]->description = $mod->b3_d;
    }
    file_put_contents($path2,json_encode($data));

  }
  public function innerPost(Request $request){
    if($request->session()->get('role')!='admin'){
      return back();
    }
    if($request->Submit == 'Submit'){
      $path = 'json/FormData/template_inner/'.$request->fileName.'.json';
      $path1 = 'banners/inner';
      $imagename1=null;$imagename2=null;$imagename3=null;
      if($request->hasFile('image1')){
        $image = $request['image1'];
        $imagename1 = $image->getClientOriginalName();
        $image->move($path1,$imagename1);
      }
      if($request->hasFile('image2')){
        $image = $request['image2'];
        $imagename2 = $image->getClientOriginalName();
        $image->move($path1,$imagename2);
      }
      if($request->hasFile('image3')){
        $image = $request['image3'];
        $imagename3 = $image->getClientOriginalName();
        $image->move($path1,$imagename3);
      }
      $data = array('id'=>'1','b1_t'=>$request->b1_t,'b1_s'=>$request->b1_s,'b1_d'=>$request->b1_d,
              'b2_n'=>$request->b2_n,'b2_l'=>$request->b2_l,'b2_d'=>$request->b2_d,
              'b3_n'=>$request->b3_n,'b3_c'=>$request->b3_c,'b3_d'=>$request->b3_d,'b3_t'=>$request->b3_t,
              'image1'=>$imagename1,'image2'=>$imagename2,'image3'=>$imagename3);
      file_put_contents($path,json_encode($data));
      $this->sendDataInner($request->fileName);
      return 'Form Submitted Successfully';

    }
    else if($request->Submit=='Save as Draft'){
      $path = 'json/draft_inner/'.$request->fileName.'.json';
      $path1 = 'json/draft_inner';
      $imagename1=null;$imagename2=null;$imagename3=null;
      if($request->hasFile('image1')){
        $image = $request['image1'];
        $imagename1 = $image->getClientOriginalName();
        $image->move($path1,$imagename1);
      }
      if($request->hasFile('image2')){
        $image = $request['image2'];
        $imagename2 = $image->getClientOriginalName();
        $image->move($path1,$imagename2);
      }
      if($request->hasFile('image3')){
        $image = $request['image3'];
        $imagename3 = $image->getClientOriginalName();
        $image->move($path1,$imagename3);
      }
      $data = array('id'=>'1','b1_t'=>$request->b1_t,'b1_s'=>$request->b1_s,'b1_d'=>$request->b1_d,
              'b2_n'=>$request->b2_n,'b2_l'=>$request->b2_l,'b2_d'=>$request->b2_d,
              'b3_n'=>$request->b3_n,'b3_c'=>$request->b3_c,'b3_d'=>$request->b3_d,'b3_t'=>$request->b3_t,
              'image1'=>$imagename1,'image2'=>$imagename2,'image3'=>$imagename3);
      file_put_contents($path,json_encode($data));
      return 'Form Saved as Draft';
    }
  }

  public function innerForm2(Request $request){
    if($request->session()->get('role')=='admin'){
      $path = 'json/inner2/'.$request->fileName.'.json';
      if(!file_exists($path)){
        $myFile = fopen($path,"w");
        copy('json/inner2/inner2.json',$path);
      }
      return view('adminForms/innerForm2')->with('fileName',$request->fileName);
    }
    return back();
  }
  public function sendDataInner2($fileName){
    $path1 = 'json/inner2/'.$fileName.'.json';
    $path2 = 'json/FormData/template_inner2/'.$fileName.'.json';
    $data1 = file_get_contents($path1);
    $mod1 = file_get_contents($path2);
    $data = json_decode($data1);
    $mod = json_decode($mod1);
    $data->section1->title = $mod->b1_t==null?$data->section1->title:$mod->b1_t;
    $data->section1->image = $mod->image==null?$data->section1->image:'../banners/inner2/'.$mod->image;
    $data->section1->title_sub = $mod->b1_s==null?$data->section1->title_sub:$mod->b1_s;
    $data->section1->description1 = $mod->b1_d==null?$data->section1->description1:$mod->b1_d;
    $data->section1->description2 = $mod->b1_d==null?$data->section1->description2:null;
    $data->section1->description3 = $mod->b1_d==null?$data->section1->description3:null;
    $data->section1->video->src = $mod->video1==null?$data->section1->video->src:'../banners/inner2/'.$mod->video1;
    $data->section1->button2->link = $mod->b1_l==null?$data->section1->button2->link:$mod->b1_l;
    $data->section3->title = $mod->b2_t==null?$data->section3->title:$mod->b2_t;
    if($mod->b2_n!=null){
      $num = $mod->b2_n;
      $num = $num%4;
      $data->section3->content[$num]->image = '../banners/inner2/'.$mod->image1;
      $data->section3->content[$num]->title=$mod->b2_s;
      $data->section3->content[$num]->description=$mod->b2_d;
    }
    $data->section4->title = $mod->b3_t==null?$data->section4->title:$mod->b3_t;
    $data->section4->description=$mod->b3_d==null?$data->section4->description:$mod->b3_d;
    $data->section4->button->link = $mod->b3_l==null?$data->section4->button->link:$mod->b3_l;
    $data->section5->section5_sub->title = $mod->b4_t==null?$data->section5->section5_sub->title:$mod->b4_t;
    if($mod->b4_n!=null){
      $num = $mod->b4_n % 8;
      $data->section5->section5_sub->contents[$num]->link = $b4_l;
      $data->section5->section5_sub->contents[$num]->text = $b4_s;
      $data->section5->section5_sub->contents[$num]->description=$b4_d;
    }
    $data->section5->section5_sub1->title = $mod->b5_t==null?$data->section5->section5_sub1->title:$mod->b5_t;
    $data->section5->section5_sub1->description1 = $mod->b5_d==null?$data->section5->section5_sub1->description1:$mod->b5_d;
    $data->section5->section5_sub1->description2 = $mod->b5_d==null?$data->section5->section5_sub1->description2:null;
    $data->section5->section5_sub1->button_wrap->buttons[0]->link = $mod->b5_l1==null?$data->section5->section5_sub1->button_wrap->buttons[0]->link:$mod->b5_l1;
    $data->section5->section5_sub1->button_wrap->buttons[1]->link = $mod->b5_l2==null?$data->section5->section5_sub1->button_wrap->buttons[1]->link:$mod->b5_l2;
    if($mod->b6_n!=null){
      $num = $mod->b6_n%2;
      $data->section6->contents[$num]->image = '../banners/inner2/'.$mod->image2;
      $data->section6->contents[$num]->button->link = '../banners/inner2/'.$mod->video2;
      $data->section6->contents[$num]->title = $mod->b6_t;
      $data->section6->contents[$num]->description = $mod->b6_d;
    }
    if($mod->b7_n!=null){
      $num = $mod->b7_n%3;
      $data->section7->contents[$num]->image = '../banners/inner2/'.$mod->image3;
      $data->section7->contents[$num]->button->link = '../banners/inner2/'.$mod->video3;
      $data->section7->contents[$num]->title = $mod->b7_t;
      $data->section7->contents[$num]->description = $mod->b7_d;
    }
    file_put_contents($path1,json_encode($data));

  }
  public function innerPost2(Request $request){
    if($request->session()->get('role')!='admin'){
      return back();
    }
    if($request->Submit == 'Submit'){
      $path = 'json/FormData/template_inner2/'.$request->fileName.'.json';
      $path1 = 'banners/inner2';
      $imagename=null;$imagename1 = null;$imagename2= null;$imagename3 = null;$videoname1 = null;$videoname2 = null;$videoname3=null;
      if($request->hasFile('image')){
        $image = $request['image'];
        $imagename = $image->getClientOriginalName();
        $image->move($path1,$imagename);
      }
      if($request->hasFile('image1')){
        $image = $request['image1'];
        $imagename1 = $image->getClientOriginalName();
        $image->move($path1,$imagename1);
      }
      if($request->hasFile('image2')){
        $image = $request['image2'];
        $imagename2 = $image->getClientOriginalName();
        $image->move($path1,$imagename2);
      }
      if($request->hasFile('image3')){
        $image = $request['image3'];
        $imagename3 = $image->getClientOriginalName();
        $image->move($path1,$imagename3);
      }
      if($request->hasFile('video1')){
        $video = $request['video1'];
        $videoname1 = $video->getClientOriginalName();
        $video->move($path1,$videoname1);
      }
      if($request->hasFile('video2')){
        $video = $request['video2'];
        $videoname2 = $video->getClientOriginalName();
        $video->move($path1,$videoname2);
      }
      if($request->hasFile('video3')){
        $video = $request['video3'];
        $videoname3 = $video->getClientOriginalName();
        $video->move($path1,$videoname3);
      }
      $data = array('id'=>'1','b1_t'=>$request->b1_t,'b1_s'=>$request->b1_s,'b1_d'=>$request->b1_d,'b1_l'=>$request->b1_l,
            'b2_t'=>$request->b2_t,'b2_n'=>$request->b2_n,'b2_s'=>$request->b2_s,'b2_d'=>$request->b2_d,'b3_t'=>$request->b3_t,
            'b3_d'=>$request->b3_d,'b3_l'=>$request->b3_l,'b4_t'=>$request->b4_t,'b4_n'=>$request->b4_n,'b4_s'=>$request->b4_s,
            'b4_d'=>$request->b4_d,'b4_l'=>$request->b4_l,'b5_t'=>$request->b5_t,'b5_d'=>$request->b5_d,'b5_l1'=>$request->b5_l1,
            'b5_l2'=>$request->b5_l2,'b6_t'=>$request->b6_t,'b6_n'=>$request->b6_n,'b6_d'=>$request->b6_d,'b7_t'=>$request->b7_t,
            'b7_n'=>$request->b7_n,'b7_d'=>$request->b7_d,'image1'=>$imagename1,'image2'=>$imagename2,'image3'=>$imagename3,
            'video1'=>$videoname1,'video2'=>$videoname2,'video3'=>$videoname3,'image'=>$imagename);
      file_put_contents($path,json_encode($data));
      $this->sendDataInner2($request->fileName);
      return 'Form Saved Successfully';
    }
    else if($request->Submit=='Save as Draft'){
      $path = 'json/draft_inner2/'.$request->fileName.'.json';
      $path1 = 'json/draft_inner2';
      $imagename=null;$imagename1 = null;$imagename2= null;$imagename3 = null;$videoname1 = null;$videoname2 = null;$videoname3=null;
      if($request->hasFile('image')){
        $image = $request['image'];
        $imagename = $image->getClientOriginalName();
        $image->move($path1,$imagename);
      }
      if($request->hasFile('image1')){
        $image = $request['image1'];
        $imagename1 = $image->getClientOriginalName();
        $image->move($path1,$imagename1);
      }
      if($request->hasFile('image2')){
        $image = $request['image2'];
        $imagename2 = $image->getClientOriginalName();
        $image->move($path1,$imagename2);
      }
      if($request->hasFile('image3')){
        $image = $request['image3'];
        $imagename3 = $image->getClientOriginalName();
        $image->move($path1,$imagename3);
      }
      if($request->hasFile('video1')){
        $video = $request['video1'];
        $videoname1 = $video->getClientOriginalName();
        $video->move($path1,$videoname1);
      }
      if($request->hasFile('video2')){
        $video = $request['video2'];
        $videoname2 = $video->getClientOriginalName();
        $video->move($path1,$videoname2);
      }
      if($request->hasFile('video3')){
        $video = $request['video3'];
        $videoname3 = $video->getClientOriginalName();
        $video->move($path1,$videoname3);
      }
      $data = array('id'=>'1','b1_t'=>$request->b1_t,'b1_s'=>$request->b1_s,'b1_d'=>$request->b1_d,'b1_l'=>$request->b1_l,
            'b2_t'=>$request->b2_t,'b2_n'=>$request->b2_n,'b2_s'=>$request->b2_s,'b2_d'=>$request->b2_d,'b3_t'=>$request->b3_t,
            'b3_d'=>$request->b3_d,'b3_l'=>$request->b3_l,'b4_t'=>$request->b4_t,'b4_n'=>$request->b4_n,'b4_s'=>$request->b4_s,
            'b4_d'=>$request->b4_d,'b4_l'=>$request->b4_l,'b5_t'=>$request->b5_t,'b5_d'=>$request->b5_d,'b5_l1'=>$request->b5_l1,
            'b5_l2'=>$request->b5_l2,'b6_t'=>$request->b6_t,'b6_n'=>$request->b6_n,'b6_d'=>$request->b6_d,'b7_t'=>$request->b7_t,
            'b7_n'=>$request->b7_n,'b7_d'=>$request->b7_d,'image1'=>$imagename1,'image2'=>$imagename2,'image3'=>$imagename3,
            'video1'=>$videoname1,'video2'=>$videoname2,'video3'=>$videoname3,'image'=>$imagename);
      file_put_contents($path,json_encode($data));
      return 'Form Saved As Draft';
    }
  }

  public function innerForm3(Request $request){
    if($request->session()->get('role')=='admin'){
      $path = 'json/inner3/'.$request->fileName.'.json';
      if(!file_exists($path)){
        $myFile = fopen($path,"w");
        copy('json/inner3/inner3.json',$path);
      }
      return view('adminForms/innerForm3')->with('fileName',$request->fileName);
    }
    return back();
  }
  public function sendDataInner3($fileName){
    $path1 = 'json/inner3/'.$fileName.'.json';
    $path2 = 'json/FormData/template_inner3/'.$fileName.'.json';
    $data1 = file_get_contents($path1);
    $mod1 = file_get_contents($path2);
    $data = json_decode($data1);
    $mod = json_decode($mod1);
    $data->section1->title = $mod->b1_t==null? $data->section1->title: $mod->b1_t;
    $data->section1->image = $mod->image1==null? $data->section1->image : '../banners/inner3/'.$mod->image1;
    $data->section1->image_wrap = $data->section1->image;
    $data->section1->video->src = $mod->video1==null?$data->section1->video->src:'../banners/inner3/'.$mod->video1;
    $data->section1->button2->link=$mod->b1_l==null?$data->section1->button2->link:$mod->b1_l;
    $data->section1->title_sub = $mod->b1_s==null?$data->section1->title_sub: $mod->b1_s;
    $data->section1->description1 = $mod->b1_d == null?$data->section1->description1: $mod->b1_d;
    $data->section1->description2 = $mod->b1_d == null?$data->section1->description2: null;
    $data->section1->description3 = $mod->b1_d == null?$data->section1->description3: null;
    if($mod->b2_n!=null){
      $num = $mod->b2_n;
      $num = $num % 7;
      if($num>3){
        $num = $num % 4;
        $data->section6->container2[$num]->link = $mod->b2_l;
        $data->section6->container2[$num]->description = $mod->b2_d;
        $data->section6->container2[$num]->image = '../banners/inner3/'.$mod->image2;
      }
      else{
        $data->section6->container1[$num]->link = $mod->b2_l;
        $data->section6->container1[$num]->description = $mod->b2_d;
        $data->section6->container1[$num]->image = '../banners/inner3/'.$mod->image2;
      }
    }
    if(($mod->b3_n!=null)){
      $num = $mod->b3_n;
      $num = $num % 3;
      $data->section8->container[$num]->background = '../banners/inner3/'.$mod->image3;
      $data->section8->container[$num]->image = '../banners/inner3/'.$mod->image3;
      $data->section8->container[$num]->title = $mod->b3_t;
      $data->section8->container[$num]->name = $mod->b3_c;
      $data->section8->container[$num]->description = $mod->b3_d;
    }
    if(($mod->b4_n!=null)){
      $num = $mod->b4_n % 11;
      if($num < 4){
        $data->section9->container1[$num]->link = $mod->b4_l;
        $data->section9->container1[$num]->image = '../banners/inner3/'.$mod->image4;
        $data->section9->container1[$num]->title = $mod->b4_t;
      }
      else if($num<7){
        $num = $num - 4;
        $data->section9->container2[$num]->link = $mod->b4_l;
        $data->section9->container2[$num]->image = '../banners/inner3/'.$mod->image4;
        $data->section9->container2[$num]->title = $mod->b4_t;
      }
      else{
        $num = $num - 7;
        $data->section9->container3[$num]->link = $mod->b4_l;
        $data->section9->container3[$num]->image = '../banners/inner3/'.$mod->image4;
        $data->section9->container3[$num]->title = $mod->b4_t;
      }
    }
    file_put_contents($path1,json_encode($data));
  }
  public function innerPost3(Request $request){
    if($request->session()->get('role')!='admin'){
      return back();
    }
    if($request->Submit == 'Submit'){
        $path = 'json/FormData/template_inner3/'.$request->fileName.'.json';
        $path1 = 'banners/inner3';
        $imagename1=null;$imagename2=null;$imagename3=null;$videoname1=null;$imagename4=null;
        if($request->hasFile('video1')){
          $video = $request['video1'];
          $videoname1 = $video->getClientOriginalName();
          $video->move($path1,$videoname1);
        }
        if($request->hasFile('image1')){
          $image = $request['image1'];
          $imagename1 = $image->getClientOriginalName();
          $image->move($path1,$imagename1);
        }
        if($request->hasFile('image2')){
          $image = $request['image2'];
          $imagename2 = $image->getClientOriginalName();
          $image->move($path1,$imagename2);
        }
        if($request->hasFile('image3')){
          $image = $request['image3'];
          $imagename3 = $image->getClientOriginalName();
          $image->move($path1,$imagename3);
        }
        if($request->hasFile('image4')){
          $image = $request['image4'];
          $imagename4 = $image->getClientOriginalName();
          $image->move($path1,$imagename4);
        }
        $data = array('id'=>'1','b1_t'=>$request->b1_t,'b1_l'=>$request->b1_l,'b1_s'=>$request->b1_s,'b1_d'=>$request->b1_d,
                'b2_n'=>$request->b2_n,'b2_l'=>$request->b2_l,'b2_d'=>$request->b2_d,
                'b3_n'=>$request->b3_n,'b3_c'=>$request->b3_c,'b3_d'=>$request->b3_d,'b3_t'=>$request->b3_t,
                'b4_t'=>$request->b4_t,'b4_n'=>$request->b4_n,'b4_l'=>$request->b4_l,
                'image1'=>$imagename1,'image2'=>$imagename2,'image3'=>$imagename3,'video1'=>$videoname1,'image4'=>$imagename4);
        file_put_contents($path,json_encode($data));
        $this->sendDataInner3($request->fileName);
        return 'Form Submitted Successfully';
    }
    else if($request->Submit=='Save as Draft'){
      $path = 'json/draft_inner3/'.$request->fileName.'.json';
      $path1 = 'json/draft_inner3';
      $imagename1=null;$imagename2=null;$imagename3=null;$videoname1=null;$imagename4=null;
      if($request->hasFile('video1')){
        $video = $request['video1'];
        $videoname1 = $video->getClientOriginalName();
        $video->move($path1,$videoname1);
      }
      if($request->hasFile('image1')){
        $image = $request['image1'];
        $imagename1 = $image->getClientOriginalName();
        $image->move($path1,$imagename1);
      }
      if($request->hasFile('image2')){
        $image = $request['image2'];
        $imagename2 = $image->getClientOriginalName();
        $image->move($path1,$imagename2);
      }
      if($request->hasFile('image3')){
        $image = $request['image3'];
        $imagename3 = $image->getClientOriginalName();
        $image->move($path1,$imagename3);
      }
      if($request->hasFile('image4')){
        $image = $request['image4'];
        $imagename4 = $image->getClientOriginalName();
        $image->move($path1,$imagename4);
      }
      $data = array('id'=>'1','b1_t'=>$request->b1_t,'b1_l'=>$request->b1_l,'b1_s'=>$request->b1_s,'b1_d'=>$request->b1_d,
              'b2_n'=>$request->b2_n,'b2_l'=>$request->b2_l,'b2_d'=>$request->b2_d,
              'b3_n'=>$request->b3_n,'b3_c'=>$request->b3_c,'b3_d'=>$request->b3_d,'b3_t'=>$request->b3_t,
              'b4_t'=>$request->b4_t,'b4_n'=>$request->b4_n,'b4_l'=>$request->b4_l,
              'image1'=>$imagename1,'image2'=>$imagename2,'image3'=>$imagename3,'video1'=>$videoname1,'image4'=>$imagename4);
      file_put_contents($path,json_encode($data));
      return 'Form Saved as Draft';
    }
  }

  public function innerForm4(Request $request){
    if($request->session()->get('role')=='admin'){
      $path1 = 'json/inner4/'.$request->fileName.'.json';
      if(!file_exists($path1)){
        $myFile = fopen($path1,"w");
        copy('json/inner4/inner4.json',$path1);
      }
      return view('adminForms/innerForm4')->with('filename',$request->fileName);
    }
    return back();
  }
  public function sendDataInner4($fileName){
    $path1 = 'json/inner4/'.$fileName.'.json';
    $path2 = 'json/FormData/template_inner4/'.$fileName.'.json';
    $data = json_decode(file_get_contents($path1));
    $mod = json_decode(file_get_contents($path2));
    $data->video_banner->src = $mod->video1==null?$data->video_banner->src: '../banners/inner4/'.$mod->video1;
    $data->video_banner->text->p = $mod->b1_t==null?$data->video_banner->text->p: $mod->b1_t;
    $data->innovation->sub_title = $mod->b2_t==null?$data->innovation->sub_title:$mod->b2_t;
    $data->innovation->descriptions = $mod->b2_d==null?$data->innovation->descriptions:$mod->b2_d;
    $data->innovation->button->link = $mod->b2_l==null?$data->innovation->button->link:$mod->b2_l;
    if($mod->b3_t[0]!=null){
      $data->carousel->items = array();
      for($i=0;$i<count($mod->b3_t);$i++){
        $object = new \stdClass();
        $object->image='../banners/inner4/'.$mod->videos[$i];
        $object->title=$mod->b3_t[$i];
        $object->iframe=$mod->b3_l[$i];
        $data->carousel->items[] = $object;
      }
    }
    if($mod->b4_t[0]!=null){
      $data->testimonial->carousel = array();
      for($i=0;$i<count($mod->b4_t);$i++){
        $object = new \stdClass();
        $object->image = '../banners/inner4/'.$mod->images[$i];
        $object->title = $mod->b4_t[$i];
        $object->description=$mod->b4_d[$i];
        $object->buttons = [];
        $data->testimonial->carousel[] = $object;
      }
    }
    if($mod->b5_t[0]!=null){
      $data->about->tabs = array();
      $data->about->tabcontents=array();
      $data->about->current_tabcontent->id='tab-1';
      $data->about->current_tabcontent->title=$mod->b5_s[0];
      $data->about->current_tabcontent->description1=$mod->b5_d[0];
      $data->about->current_tabcontent->description2=null;
      $data->about->current_tabcontent->description3=null;
      $data->about->current_tabcontent->button->link=$mod->b5_l[0];
      for($i=1;$i<=count($mod->b5_t);$i++){
        $texto = new \stdClass();
        $texto->text = $mod->b5_t[$i-1];
        $data->about->tabs[] =$texto;
        if($i-1 == 0){
          continue;
        }
        $object = new \stdClass();
        $object->id = 'tab-'.$i;
        $object->title=$mod->b5_s[$i-1];
        $object->description1=$mod->b5_d[$i-1];
        $object->description2=null;
        $object->description3=null;
        $object->button = new \stdClass();
        $object->button->text = 'LEARN MORE';
        $object->button->link = $mod->b5_l[$i-1];
        $data->about->tabcontents[] = $object;
      }
    }
    if($mod->b6_t[0]!=null){
      $data->offerings->contents = array();
      $data->offerings->description = $mod->heading;
      for($i=0;$i<count($mod->b6_t);$i++){
        $object = new \stdClass();
        $object->title=$mod->b6_t[$i];
        $name = '../banners/inner4/'.$mod->b6_i[$i];
        $object->image =$name;
        $object->description = $mod->b6_d[$i];
        $data->offerings->contents[] = $object;
      }
    }
    if($mod->b7_t[0]!=null){
      $data->partners->contents = array();
      for($i=0;$i<count($mod->b7_t);$i++){
        $object = new \stdClass();
        $object->title=$mod->b7_t[$i];
        $object->image ='../banners/inner4/'.$mod->b7_i[$i];
        $object->description = $mod->b7_d[$i];
        $data->partners->contents[] = $object;
      }
    }
    if($mod->b8_t[0]!=null){
      $data->work->contents = array();
      for($i=0;$i<count($mod->b8_t);$i++){
        $object = new \stdClass();
        $object->tag = $mod->b8_t[$i];
        $object->title = $mod->b8_d[$i];
        $object->button = 'View';
        $data->work->contents[] = $object;
      }
    }
    file_put_contents($path1,json_encode($data));
  }
  public function innerPost4(Request $request){
    if($request->session()->get('role')!='admin'){
      return back();
    }
    if($request->Submit == 'Submit'){
      $path = 'json/FormData/template_inner4/'.$request->fileName.'.json';
      if(!file_exists($path)){
        $myFile = fopen($path,"w");
      }
      $path1 = 'banners/inner4';
      $videoname1 = null;$videoname2=null;
      $images[]=null;$videos = array();$images2 = array();$b7_i=array();
      if($request->b7_t[0]!=null){
        foreach($request->b7_i as $image){
          $b7_i[] = $image->getClientOriginalName();
          $image->move($path1,$image->getClientOriginalName());
        }
      }
      if($request->b6_t[0]!=null){
        foreach($request->b6_i as $image){
          $images2[] = $image->getClientOriginalName();
          $image->move($path1,$image->getClientOriginalName());
        }
      }
      if($request->b4_i!=null){
        foreach($request->b4_i as $image){
          $images[] = $image->getClientOriginalName();
          $image->move($path1,$image->getClientOriginalName());
        }
      }
      if($request->b3_v!=null){
        foreach($request->b3_v as $video){
          $videos[] = $video->getClientOriginalName();
          $video->move($path1,$video->getClientOriginalName());
        }
      }
      array_splice($images,0,1);
      if($request->hasFile('video1')){
        $video = $request['video1'];
        $videoname1 = $video->getClientOriginalName();
        $video->move($path1,$videoname1);
      }
      $array = array('id'=>'1','b1_t'=>$request->b1_t,'b2_t'=>$request->b2_t,'b2_l'=>$request->b2_l,
              'b2_d'=>$request->b2_d,'b3_t'=>$request->b3_t,'b3_l'=>$request->b3_l,'video1'=>$videoname1,
              'images'=>$images,'b4_t'=>$request->b4_t,'b4_d'=>$request->b4_d,'videos'=>$videos,
              'b5_t'=>$request->b5_t,'b5_d'=>$request->b5_d,'b5_l'=>$request->b5_l,'b5_s'=>$request->b5_s,
              'b6_t'=>$request->b6_t,'b6_d'=>$request->b6_d,'b6_i'=>$images2,'heading'=>$request->heading,
              'b7_t'=>$request->b7_t,'b7_d'=>$request->b7_d,'b7_i'=>$b7_i,'b8_t'=>$request->b8_t,
              'b8_d'=>$request->b8_d);
      file_put_contents($path,json_encode($array));
      $this->sendDataInner4($request->fileName);
      return 'Form Saved Successfully';
    }
    else if($request->Submit=='Save as Draft'){
      $path = 'json/draft_inner4/'.$request->fileName.'.json';
      if(!file_exists($path)){
        $myFile = fopen($path,"w");
      }
      $path1 = 'json/draft_inner4';
      $videoname1 = null;$videoname2=null;
      $images[]=null;$videos = array();$images2 = array();$b7_i=array();
      if($request->b7_t[0]!=null){
        foreach($request->b7_i as $image){
          $b7_i[] = $image->getClientOriginalName();
          $image->move($path1,$image->getClientOriginalName());
        }
      }
      if($request->b6_t[0]!=null){
        foreach($request->b6_i as $image){
          $images2[] = $image->getClientOriginalName();
          $image->move($path1,$image->getClientOriginalName());
        }
      }
      if($request->b4_i!=null){
        foreach($request->b4_i as $image){
          $images[] = $image->getClientOriginalName();
          $image->move($path1,$image->getClientOriginalName());
        }
      }
      if($request->b3_v!=null){
        foreach($request->b3_v as $video){
          $videos[] = $video->getClientOriginalName();
          $video->move($path1,$video->getClientOriginalName());
        }
      }
      array_splice($images,0,1);
      if($request->hasFile('video1')){
        $video = $request['video1'];
        $videoname1 = $video->getClientOriginalName();
        $video->move($path1,$videoname1);
      }
      $array = array('id'=>'1','b1_t'=>$request->b1_t,'b2_t'=>$request->b2_t,'b2_l'=>$request->b2_l,
              'b2_d'=>$request->b2_d,'b3_t'=>$request->b3_t,'b3_l'=>$request->b3_l,'video1'=>$videoname1,
              'images'=>$images,'b4_t'=>$request->b4_t,'b4_d'=>$request->b4_d,'videos'=>$videos,
              'b5_t'=>$request->b5_t,'b5_d'=>$request->b5_d,'b5_l'=>$request->b5_l,'b5_s'=>$request->b5_s,
              'b6_t'=>$request->b6_t,'b6_d'=>$request->b6_d,'b6_i'=>$images2,'heading'=>$request->heading,
              'b7_t'=>$request->b7_t,'b7_d'=>$request->b7_d,'b7_i'=>$b7_i,'b8_t'=>$request->b8_t,
              'b8_d'=>$request->b8_d);
      file_put_contents($path,json_encode($array));
      return 'Form Saved as Draft';
    }
  }

  public function innerFormBlank(Request $request){
    if($request->session()->get('role')=='admin'){
      $path = 'json/innerblank/'.$request->fileName.'.json';
      if(!file_exists($path)){
        $myFile = fopen($path,"w");
        copy('json/innerblank/innerblank.json',$path);
      }
      return view('adminForms/innerFormBlank')->with('fileName',$request->fileName);
    }
    return back();
  }
  public function sendDataInnerBlank($fileName){
    $path1 = 'json/innerblank/'.$fileName.'.json';
    $data = json_decode(file_get_contents($path1));
    $mod = json_decode(file_get_contents('json/FormData/template_blank/'.$fileName.'.json'));
    if($mod->b1_l[0]!=null){
      $data->section1->nav=array();
      for($i=0;$i<count($mod->b1_l);$i++){
        $object = new \stdclass();
        $object->link = $mod->b1_l[$i];
        $object->text = $mod->b1_t[$i];
        $data->section1->nav[] = $object;
      }
    }
    $data->section1->h3_1 = $mod->topic==null?$data->section1->h3_1:$mod->topic;
    $data->section1->h3_2 = $mod->subtitle1=null?$data->section1->h3_2:$mod->subtitle1;
    $data->section1->h4_1 = $mod->subtitle1=null?$data->section1->h4_1:$mod->subtitle2;
    $data->section1->h4_2 = $mod->subtitle1=null?$data->section1->h4_2:$mod->subtitle3;
    if($mod->points1[0]!=null){
      $data->section1->ul = array();
      for($i=0;$i<count($mod->points1);$i++){
        $data->section1->ul[] = $mod->points1[$i];
      }
    }
    if($mod->points2[0]!=null){
      $data->section1->ul_2 = array();
      for($i=0;$i<count($mod->points2);$i++){
        $data->section1->ul_2[] = $mod->points2[$i];
      }
    }
    file_put_contents($path1,json_encode($data));
  }
  public function innerPostBlank(Request $request){
    if($request->session()->get('role')!='admin'){
      return back();
    }
    if($request->Submit == 'Submit'){
      $path = 'json/FormData/template_blank/'.$request->fileName.'.json';
      $data = array('b1_l'=>$request->b1_l,'b1_t'=>$request->b1_t,'topic'=>$request->topic,
            'subtitle1'=>$request->subtitle1,'points1'=>$request->points1,'subtitle2'=>$request->subtitle2,
          'subtitle3'=>$request->subtitle3,'points2'=>$request->points2);
      file_put_contents($path,json_encode($data));
      $this->sendDataInnerBlank($request->fileName);
      return 'Form Submitted Successfully';
    }
    else if($request->Submit=='Save as Draft'){
      $path = 'json/draft_blank/'.$request->fileName.'.json';
      $data = array('b1_l'=>$request->b1_l,'b1_t'=>$request->b1_t,'topic'=>$request->topic,
            'subtitle1'=>$request->subtitle1,'points1'=>$request->points1);
      file_put_contents($path,json_encode($data));
      return 'Form Saved as Draft';
    }
  }

  public function innerFormBlank1(Request $request){
    if($request->session()->get('role')=='admin'){
      $path = 'json/innerblank2/'.$request->fileName.'.json';
      if(!file_exists($path)){
        $myFile = fopen($path,"w");
        copy('json/innerblank2/innerblank2.json',$path);
      }
      return view('adminForms/innerFormBlank1')->with('fileName',$request->fileName);
    }
    return back();
  }
  public function sendDataInnerBlank2($fileName){
    $path1 = 'json/innerblank2/'.$fileName.'.json';
    $path2 = 'json/FormData/template_blank2/'.$fileName.'.json';
    $mod = json_decode(file_get_contents($path2));
    $data = json_decode(file_get_contents($path1));
    if($mod->b1l_t[0]!=null){
      $data->section1->carousel1=array();
      for($i=0;$i<count($mod->b1l_t);$i++){
        $object = new \stdclass();
        $object->title = $mod->b1l_t[$i];
        $object->description = $mod->b1l_d[$i];
        $object->button = new \stdclass();
        $object->button->link = $mod->b1l_l[$i];
        $object->button->text = 'Read more';
        $data->section1->carousel1[] = $object;
      }
    }
      if($mod->b1r_t[0]!=null){
        $data->section1->carousel2=array();
        for($i=0;$i<count($mod->b1r_t);$i++){
          $object = new \stdclass();
          $object->title = $mod->b1r_t[$i];
          $object->description = $mod->b1r_d[$i];
          $object->button = new \stdclass();
          $object->button->link = $mod->b1r_l[$i];
          $object->button->text = 'Read more';
          $data->section1->carousel2[] = $object;
        }
      }
      $data->section2->title = $mod->b2_t==null?$data->section2->title:$mod->b2_t;
      $data->section2->image = $mod->image1==null?$data->section2->image:'../banners/blank2/'.$mod->image1;
      if($mod->b2t_t[0]!=null){
        $data->section2->content1=array();
        for($i=0;$i<count($mod->b2t_t);$i++){
          $object = new \stdclass();
          $object->title = $mod->b2t_t[$i];
          $object->description = $mod->b2t_d[$i];
          $object->button = new \stdclass();
          $object->button->link = $mod->b2t_l[$i];
          $object->button->text = 'Read more';
          $data->section2->content1[] = $object;
        }
      }
      if($mod->b2b_t[0]!=null){
        $data->section2->content2=array();
        for($i=0;$i<count($mod->b2b_t);$i++){
          $object = new \stdclass();
          $object->title = $mod->b2b_t[$i];
          $object->description = $mod->b2b_d[$i];
          $object->button = new \stdclass();
          $object->button->link = $mod->b2b_l[$i];
          $object->button->text = 'Read more';
          $data->section2->content2[] = $object;
        }
      }
    file_put_contents($path1,json_encode($data));
  }
  public function innerPostBlank1(Request $request){
    if($request->session()->get('role')!='admin'){
      return back();
    }
    if($request->Submit == 'Submit'){
      $path = 'json/FormData/template_blank2/'.$request->fileName.'.json';
      $image1=null;
      if($request->image1!=null){
        $image1 = $request->image1->getClientOriginalName();
        $request->image1->move('banners/blank2',$image1);
      }
      $data = array('b1l_t'=>$request->b1l_t,'b1l_d'=>$request->b1l_d,'b1l_l'=>$request->b1l_l,
                'b1r_t'=>$request->b1r_t,'b1r_d'=>$request->b1r_d,'b1r_l'=>$request->b1r_l,
              'b2_t'=>$request->b2_t,'image1'=>$image1,'b2t_t'=>$request->b2t_t,'b2t_d'=>$request->b2t_d,
              'b2t_l'=>$request->b2t_l,'b2b_t'=>$request->b2b_t,'b2b_d'=>$request->b2b_d,'b2b_l'=>$request->b2b_l);
      file_put_contents($path,json_encode($data));
      $this->sendDataInnerBlank2($request->fileName);
      return 'Form Submitted Successfully';

    }
    else if($request->Submit=='Save as Draft'){
      $path = 'json/draft_blank2/'.$request->fileName.'.json';
      $data = array('b1l_t'=>$request->b1l_t,'b1l_d'=>$request->b1l_d,'b1l_l'=>$request->b1l_l,
                'b1r_t'=>$request->b1r_t,'b1r_d'=>$request->b1r_d,'b1r_l'=>$request->b1r_l);
      file_put_contents($path,json_encode($data));
      return 'Form Saved as Draft';
    }
  }

}
