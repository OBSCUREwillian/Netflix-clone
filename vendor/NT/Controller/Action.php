<?php
namespace NT\Controller;

// Todos os Controllers podem extender essa classe Action para renderizar a pagina

abstract class Action{

    protected $view;

    //* contruct que cria um objeto para que possa ser criado itens dinamicamente e ficar fisivel para os demais metodos 
    public function __construct(){
        $this->view = new \stdClass();
    }

    //* metodo que renderiza o layout padrão do site recebendo como parametro o nome da $view
    protected function render($view, $layout){

        // usando o objeto view para criar um item 'page', atribuindo a ele o nome da view passada como parametro, assim esse nome fica visivel para os demais metodos
        $this->view->page = $view;

        if(file_exists("../App/Views/". $layout .".phtml")){
            //requerindo o layout da pagina padrao
            require_once "../App/Views/". $layout .".phtml";
        }else{
            $this->content();
        }
    }


    //* Renderiza algum conteudo criado no diretorio App/Views/...
    protected function content(){
        
        // Editando o nome da classe que esta usando/exten essa classe 'Action'
        $classeAtual = get_class($this);

        $classeAtual = str_replace('App\\Controllers\\', '', $classeAtual);

        $classeAtual = strtolower(str_replace('Controller','', $classeAtual));

        //Requerindo o conteudo do diretorio App/Views/...
        require_once "../App/Views/" . $classeAtual . "/". $this->view->page .".phtml";
    }

}

?>