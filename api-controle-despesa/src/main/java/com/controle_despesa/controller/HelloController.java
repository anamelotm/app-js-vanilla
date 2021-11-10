package com.controle_despesa.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController //esta classe vai ser um controller (abre as portas do api)
@RequestMapping("/hello")
public class HelloController {

    @GetMapping
    public String getHello(){
        return "Hello Spring";
    }

    @GetMapping("/nome_completo")
    public String nomeCompleto(){
        return "Ana Melo";
    }
}
