@extends('layout')

@section('content')
<div style="">
   <div style="display: flex; max-width: 90%; margin: 100px auto;">
       <div style="flex: 1">
           <h1>Your Answer</h1>
         @foreach($dejas as $deja)
           @if($deja['answer'] == $deja['selected'])
            <h3 style="background-color: skyblue; padding:30px; width: 100%;">{{$deja['question']}}:{{$deja['selected']}}:正解</h3>
           @else
            <h3 style="background-color: pink; padding:30px; width: 100%;">{{$deja['question']}}:{{$deja['selected']}}:不正解</h3>
           @endif
         @endforeach
       </div>
         
      <div style="flex: 1;">
         <h1>Correct Answer</h1>
         @foreach($dejas as $deja)
           @if($deja['answer'] == $deja['selected'])
            <h3 style="background-color: skyblue; padding:30px; width: 100%;">{{$deja['answer']}}</h3>
           @else
            <h3 style="background-color: pink; padding:30px; width: 100%;">{{$deja['answer']}}</h3>
           @endif
         @endforeach
      </div> 
   </div>

       <div style="max-width: 90%; margin: 100px auto;">
              <h1>More informations with {{$info->name}}</h1>
           <div id="carouselExampleCaptions" style="display: flex;" class="carousel slide" data-bs-ride="carousel">
               @foreach($categories as $category)
                  <a href="/display/{{$info->sub_name}}/{{$category->id}}" style="text-decoration: none;">
                    <div class="card" style="width: 18rem; margin: 15px;">
                         <img src={{$category->thumbnail}} class="card-img-top" alt="...">
                         <div class="card-body">
                           <p class="card-text">{{$category->name}}</p>
                           <p class="card-text">{{$category->description}}</p>
                         </div>
                   </div> 
                  </a>
               @endforeach
           </div>
       </div>
</div>

@endsection