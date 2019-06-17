<?php

use Illuminate\Database\Seeder;
use App\Task;

class TasksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

       /* factory(Task::class)->create([
         'keep'=>'oraciones de prueba' 
        ]);*/
        factory(App\Task::class,20)->create();
    }
}
