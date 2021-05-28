<?php
namespace NT\Model;

use PDO;

abstract class Model {
    protected $db; 

    public function __construct(PDO $db){
        $this->db = $db;
    }
}


?>