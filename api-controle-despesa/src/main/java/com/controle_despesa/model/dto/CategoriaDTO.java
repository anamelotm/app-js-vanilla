package com.controle_despesa.model.dto;

import com.controle_despesa.model.entity.Categoria;
import lombok.Getter;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Getter
public class CategoriaDTO {
    // !!! NAO USAR ATRIBUTOS DO TIPO COMPLEXO !!!
    private String descricao;

    // utilizado para apresentar apenas o que eu quero na listagem do GET
    public CategoriaDTO(Categoria categoria){
        this.descricao = categoria.getDescricao();
    }

    // metodo que converte a entidade para DTO
    public static List<CategoriaDTO> converter(List<Categoria> categorias){
        return categorias.stream().map(CategoriaDTO::new).collect(Collectors.toList());
    }
}
