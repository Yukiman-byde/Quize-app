@extends('layout')

@section('content')
    <h1>クイズ画面</h1>
    
    <iframe width="560" height="315" src="{{ $display->video }}" 
  title="YouTube video player" 
  frameborder="0"
  allow="accelerometer; 
  autoplay; 
  clipboard-write; 
  encrypted-media;
  gyroscope;
  picture-in-picture" 
  style="border-radius:5px"
  allowfullscreen></iframe>
  
  
  <h3>Choose a correct answer</h3>
  
  <p>Transcription</p>
  <p>{{ $display->quize->answer }}</p>
  
  <p>
      <h1>1.{{ $display->quize->question }}</h1>
      <br>
      <br>
       <form id="form1" action="">
          <input type="radio" name="quizzes" value=1>{{ $display->quize->choice1 }}<br>
          <input type="radio" name="quizzes" value=2>{{ $display->quize->choice2 }}<br>
          <input type="radio" name="quizzes" value=3>{{ $display->quize->choice3 }}<br>
          <input type="submit" value="選択" onclick="myCheck();">
          <input id="putin" type="hidden" name="quizzes_outcome" value="">
       </form>
       <div id="app"></div>
  

@endsection