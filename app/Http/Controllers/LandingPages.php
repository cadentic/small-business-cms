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

  public function innerPost(Request $request){
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
      $img_nm = 'Image'.$index.'.jpeg';
      $data = array('id'=>$index,'title'=>$request->title,'bgcolor'=>$request->bgcolor,'bg_img'=>$img_nm,'subtitle'=>$request->subtitle,'description'=>$request->description);
      $file_path = 'json/inner_f1.json';
      $file = file_get_contents($file_path);
      $json = json_decode($file);
      $json[] = $data;
      file_put_contents($file_path,json_encode($json));
      $image=$request->get('bg_img');
      $name=time().'.'.explode('/',explode(':',substr($image,0,strpos($image,';')))[1])[1];
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
    return view('innerForm2');
  }

  public function innerPost2(Request $request){
    return 123;
  }

  public function innerForm3(){
    return view('innerForm3');
  }

  public function innerPost3(Request $request){
    return 123;
  }

  public function innerForm4(){
    return view('innerForm4');
  }

  public function innerPost4(Request $request){
    return 123;
  }

  public function innerFormBlank(){
    return view('innerFormBlank');
  }

  public function innerPostBlank(Request $request){
    return 123;
  }

  public function innerFormBlank1(){
    return view('innerFormBlank1');
  }

  public function innerPostBlank1(Request $request){
    return 123;
  }

}
