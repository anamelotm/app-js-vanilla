package com.controle_despesa.controller;

import com.controle_despesa.model.dto.CategoriaDTO;
import com.controle_despesa.model.dto.ProdutoDTO;
import com.controle_despesa.model.entity.Categoria;
import com.controle_despesa.model.entity.Produto;
import com.controle_despesa.model.repositories.ProdutoRepository;
import com.controle_despesa.model.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produto")
public class ProdutoController {

        @Autowired
        private ProdutoService service;

        @DeleteMapping("/{id}")
        public void inativar(@PathVariable Long id) {
            service.inativar(id);
        }
}
