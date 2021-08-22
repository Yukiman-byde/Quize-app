@extends('layout')


@section('content')
        <h1>ニュース一覧</h1>

        @foreach ( $displays as $display )
          <div style="border-bottom: gray solid 1px; width:400px; margin-bottom:50px">
            <p>
               <a href="{{ route('display.show', ['id' => $display->id])}}"><img src="{{ $display->thumbnail}}"></a>
               <br>
                {{ $display->name }},
               <br>
                {{ $display->description }}
               <br>
                カテゴリー：{{ $display->category->name }}
            </p>
          </div>
        @endforeach
@endsection
