<?php

namespace App\Controllers;
//Recursos do mini-framework
use NT\Controller\Action;
use NT\Model\Container;

//Models
use App\Models\Filmes;


class IndexController extends Action{

    public function index(){

        $filmes = Container::getModel('Filmes');
        
        $this->view->dados = $filmes->getFilmes();

        $this->render('index', 'layout1');
    }
}
?>