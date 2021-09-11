<?php

use Illuminate\Database\Seeder;

class TranscriptionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         DB::table('transcriptions')->insert(
            [
             'transcription' => "では、日本語の初対面の挨拶の様子を見てみましょう。こちらは安藤さんがワンさんと初めて会うシーンです。みなさん、よくみてくださいね。~Conversation starts~ Ando：初めまして、安藤です、私は日本人です。よろしくお願いします。　Wang:初めまして。ワンです。よろしくお願いします。　Ando:ワンさんですね。中国人ですか？　Wang:　はい、私は中国人です　Ando:あのかたはどなたですか？　Wang:キムさんです。大学の先生です。　Ando:キムさんも中国人ですか？　Wang:いいえ。キムさんは中国人ではありません。韓国人です。　Ando: そうですか。わかりました。　Kim：初めまして、キムです。韓国から来ました。よろしくお願いします。　Ando and Wang: よろしくお願いします。~Conversation ends~ いかがでしたか？　初対面の会話でした。",
             'tip' => "Don't hasitate to follow this youtube channel for more video and information."
            ],
            );
    }
}
