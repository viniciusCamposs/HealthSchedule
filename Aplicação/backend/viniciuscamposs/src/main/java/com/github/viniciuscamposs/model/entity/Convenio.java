package com.github.viniciuscamposs.model.entity;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import jakarta.persistence.*;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.br.CNPJ;

@Entity
@Data
public class Convenio {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "empresa_id", referencedColumnName = "id")
    @NotBlank(message = "{empresa.not.blank}")
    private Empresa empresa;

    @Length(max = 50, message = "Limite máximo de caracteres para o campo nome é de 50 caracteres.")
    @NotBlank(message = "{nome.not.blank}")
    private String nome;

    @Length(max = 14, message = "Limite máximo de caracteres para o campo CNPJ é de 14 caracteres.")
    @NotBlank(message = "{cnpj.not.blank}")
    @CNPJ(message = "{cnpj.not.valid}")
    private String cnpj;

    @Length(max = 20, message = "Limite máximo de caracteres para o campo código é de 20 caracteres.")
    @NotBlank(message = "Código não deve estar em branco.")
    private String codigo;

    @Column(columnDefinition = "boolean default ativo")
    private boolean ativo;
}
