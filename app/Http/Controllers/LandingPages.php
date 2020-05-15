<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LandingPages extends Controller
{
  public function gotoFormA(){
    $title = null;
    return view('formA')->with('title',$title);
  }

  public function formPost(Request $request){
    if($request->submit == 'Submit'){
      $this->validate($request,[
        'title' => 'required',
        'bg_img.*' => 'max:4096|image'
      ]);
      $indexfile = file_get_contents('json/Numbers/nummain.json');
      $index = json_decode($indexfile);
      $index = $index + 1;
      file_put_contents('json/Numbers/nummain.json',json_encode($index));
      $banner = array('id'=>$index, 'title'=>$request->title , 'bg_img'=>$request->bg_img, 'link'=>$request->link);
      $file_path = 'json/client_main1.json';
      $file = file_get_contents($file_path);
      $json = json_decode($file);
      $json[] = $banner;
      foreach($request->file('bg_img') as $image){
        $image_name = $image->getClientOriginalName();
        $path = 'banners';
        $image->move($path,$image_name);
      }
      file_put_contents('json/client_main1.json',json_encode($json));
      return 'Form Submitted Successfully';
    }
    else if($request->submit == 'Edit'){
      $path = 'json/draft_main/draft_main.json';
      $data = file_get_contents($path);
      $gets = json_decode($data);
      if(!empty($gets->title)){
        $form = array(
          'title' => $gets->title,
        );
        $newdata=null;
        file_put_contents('json/draft_main/draft_main.json',json_encode($newdata));
        $path2 = 'json/draft_main';
        return view('formA')->with($form);
      }
      else{
        $form = array(
          'title' => null
        );
        return view('test')->with($form);
      }

    }
    else if($request->submit == 'Save as Draft'){
      $this->validate($request,[
        'title' => 'required',
        'bg_img' => 'nullable',
        'bg_img.*' => 'max:4096|image'
      ]);
      $banner = array('id'=>'1','title'=>$request->title,'bg_img'=>$request->bg_img,'link'=>$request->link);
      $file_path = 'json/draft_main/draft_main.json';
      file_put_contents($file_path,json_encode($banner));
      if($request->hasFile('bg_img')){
        foreach($request->bg_img as $images){
          $image_name = $images->getClientOriginalName();
          $path = 'json/draft_main';
          $images->move($path,$image_name);
        }
      }
      return 'Draft Saved';
    }
  }

  public function innerForm(){
    return view('innerForm');
  }

}
