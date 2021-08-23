@extends('layout')

@section('content')
  <h1>{{ $display->name }}</h1>
 
  <iframe width="560" height="315" src="https://www.youtube.com/embed/ZqbZauXC9_Y?start=0&end=55" 
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

 

  <p>{{ $display->quize->answear }}</p><br>
 
  <p>
      <h1>1.{{ $display->quize->question }}</h1>
      <br>
      <br>

       <form id="form1" action="{{ route('display.outcome') }}"
           @csrf
          <input type="radio" name="quizzes" value=1>{{ $display->quize->choice1 }}<br>
          <input type="radio" name="quizzes" value=2>{{ $display->quize->choice2 }}<br>
          <input type="radio" name="quizzes" value=3>{{ $display->quize->choice3 }}<br>
          <input type="submit" value="選択" onclick="myCheck();">
          <input id="putin" type="hidden" name="quizzes_outcome" value="">
       </form>

 　　　
 <script>
      function myCheck() {
         let count = 3;
         let element = document.getElementById('form1');
         let RadioElement = element.quizzes;
         let a = RadioElement.value;
    　　const correct_answer = {{ $display->quize->answear }};
         
         
         if(a == correct_answer){
             console.log('正解です！');
             count++;
         } else {
             console.log('不正解です');
         }
         console.log(count);
         document.getElementById('putin').value = count;
      }
</script>

@endsection