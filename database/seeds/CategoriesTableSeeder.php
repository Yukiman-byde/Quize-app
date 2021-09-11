<?php

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert(
            ['name' => '初心者',
             'sub_name' => 'Basic',
             'picture' => 'NULL',
             ],
            );
    }
}
