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
  public function sendDataInner(){
    $path1 = 'json/FormData/inner_f1.json';
    $path2 = 'json/inner.json';
    $file = file_get_contents($path2);
    $data = json_decode($file);
    $file1= file_get_contents($path1);
    $mod = json_decode($file1);
    $data->section1->title = $mod->b1_t==null? $data->section1->title: $mod->b1_t;
    $data->section1->image = $mod->image1==null? $data->section1->image : 'banners/inner/'.$mod->image1;
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
        $data->section6->container2[$num]->image = 'banners/inner/'.$mod->image2;
      }
      else{
        $data->section6->container1[$num]->link = $mod->b2_l;
        $data->section6->container1[$num]->description = $mod->b2_d;
        $data->section6->container1[$num]->image = 'banners/inner/'.$mod->image2;
      }
    }
    if(($mod->b3_n!=null)){
      $num = $mod->b3_n;
      $num = $num % 3;
      $data->section8->container[$num]->background = 'banners/inner/'.$mod->image3;
      $data->section8->container[$num]->image = 'banners/inner/'.$mod->image3;
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
      $path = 'json/FormData/inner_f1.json';
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
      $this->sendDataInner();
      return 'Form Submitted Successfully';

    }
    else if($request->Submit=='Save as Draft'){
      $path = 'json/draft_inner/draft_inner.json';
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
      return view('adminForms/innerForm2');
    }
    return back();
  }
  public function sendDataInner2(){
    $path1 = 'json/inner2.json';
    $path2 = 'json/FormData/inner_f2.json';
    $data1 = file_get_contents($path1);
    $mod1 = file_get_contents($path2);
    $data = json_decode($data1);
    $mod = json_decode($mod1);
    $data->section1->title = $mod->b1_t==null?$data->section1->title:$mod->b1_t;
    $data->section1->image = $mod->image==null?$data->section1->image:'banners/inner2/'.$mod->image;
    $data->section1->title_sub = $mod->b1_s==null?$data->section1->title_sub:$mod->b1_s;
    $data->section1->description1 = $mod->b1_d==null?$data->section1->description1:$mod->b1_d;
    $data->section1->description2 = $mod->b1_d==null?$data->section1->description2:null;
    $data->section1->description3 = $mod->b1_d==null?$data->section1->description3:null;
    $data->section1->video->src = $mod->video1==null?$data->section1->video->src:'banners/inner2/'.$mod->video1;
    $data->section1->button2->link = $mod->b1_l==null?$data->section1->button2->link:$mod->b1_l;
    $data->section3->title = $mod->b2_t==null?$data->section3->title:$mod->b2_t;
    if($mod->b2_n!=null){
      $num = $mod->b2_n;
      $num = $num%4;
      $data->section3->content[$num]->image = 'banners/inner2/'.$mod->image1;
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
      $data->section6->contents[$num]->image = 'banners/inner2/'.$mod->image2;
      $data->section6->contents[$num]->button->link = 'banners/inner2/'.$mod->video2;
      $data->section6->contents[$num]->title = $mod->b6_t;
      $data->section6->contents[$num]->description = $mod->b6_d;
    }
    if($mod->b7_n!=null){
      $num = $mod->b7_n%3;
      $data->section7->contents[$num]->image = 'banners/inner2/'.$mod->image3;
      $data->section7->contents[$num]->button->link = 'banners/inner2/'.$mod->video3;
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
      $path = 'json/FormData/inner_f2.json';
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
      $this->sendDataInner2();
      return 'Form Saved Successfully';
    }
    else if($request->Submit=='Save as Draft'){
      $path = 'json/draft_inner2/draft_inner2.json';
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
      return view('adminForms/innerForm3');
    }
    return back();
  }
  public function sendDataInner3(){
    $path1 = 'json/inner3.json';
    $path2 = 'json/FormData/inner_f3.json';
    $data1 = file_get_contents($path1);
    $mod1 = file_get_contents($path2);
    $data = json_decode($data1);
    $mod = json_decode($mod1);
    $data->section1->title = $mod->b1_t==null? $data->section1->title: $mod->b1_t;
    $data->section1->image = $mod->image1==null? $data->section1->image : 'banners/inner3/'.$mod->image1;
    $data->section1->image_wrap = $data->section1->image;
    $data->section1->video->src = $mod->video1==null?$data->section1->video->src:'banners/inner3/'.$mod->video1;
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
        $data->section6->container2[$num]->image = 'banners/inner3/'.$mod->image2;
      }
      else{
        $data->section6->container1[$num]->link = $mod->b2_l;
        $data->section6->container1[$num]->description = $mod->b2_d;
        $data->section6->container1[$num]->image = 'banners/inner3/'.$mod->image2;
      }
    }
    if(($mod->b3_n!=null)){
      $num = $mod->b3_n;
      $num = $num % 3;
      $data->section8->container[$num]->background = 'banners/inner3/'.$mod->image3;
      $data->section8->container[$num]->image = 'banners/inner3/'.$mod->image3;
      $data->section8->container[$num]->title = $mod->b3_t;
      $data->section8->container[$num]->name = $mod->b3_c;
      $data->section8->container[$num]->description = $mod->b3_d;
    }
    if(($mod->b4_n!=null)){
      $num = $mod->b4_n % 11;
      if($num < 4){
        $data->section9->container1[$num]->link = $mod->b4_l;
        $data->section9->container1[$num]->image = 'banners/inner3/'.$mod->image4;
        $data->section9->container1[$num]->title = $mod->b4_t;
      }
      else if($num<7){
        $num = $num - 4;
        $data->section9->container2[$num]->link = $mod->b4_l;
        $data->section9->container2[$num]->image = 'banners/inner3/'.$mod->image4;
        $data->section9->container2[$num]->title = $mod->b4_t;
      }
      else{
        $num = $num - 7;
        $data->section9->container3[$num]->link = $mod->b4_l;
        $data->section9->container3[$num]->image = 'banners/inner3/'.$mod->image4;
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
        $path = 'json/FormData/inner_f3.json';
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
        $this->sendDataInner3();
        return 'Form Submitted Successfully';
    }
    else if($request->Submit=='Save as Draft'){
      $path = 'json/draft_inner3/draft_inner3.json';
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
      return view('adminForms/innerForm4');
    }
    return back();
  }
  public function innerPost4(Request $request){
    if($request->session()->get('role')!='admin'){
      return back();
    }
    if($request->Submit == 'Submit'){
    }
    else if($request->Submit=='Save as Draft'){

    }
  }

  public function innerFormBlank(Request $request){
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

  public function innerFormBlank1(Request $request){
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
