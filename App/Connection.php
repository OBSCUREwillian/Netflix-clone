<?php
namespace App;


class Connection {
    public static function getDb(){
        try{

            $connection = new \PDO(
                "",
                "",
                ""
            );
            return $connection;

        } catch(\PDOException $e) {
            echo $e->getMessage();
            
        }
    }
}


?>