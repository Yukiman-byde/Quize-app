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
            ['id' => '1',
            'display_id' => 1,
              'transcription' => '1:ANNの集計によりますと全国で今日新型コロナウイルスへの新たな感染者が午後七時の時点で二万五千人を超えることがわかりました。
2:二日連続で二万人を上回り、過去最多となった昨日から一千人以上感染者が増加しています。全国では今日二十二の府県で過去最多で感染の急拡大が止まりません。',
            ],
            );
    }
}
