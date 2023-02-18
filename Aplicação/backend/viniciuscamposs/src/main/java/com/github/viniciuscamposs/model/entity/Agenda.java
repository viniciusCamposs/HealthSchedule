package com.github.viniciuscamposs.model.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

@Entity
@Data
public class Agenda {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "especialidade_id", referencedColumnName = "id")
    @NotBlank(message = "{especialidade.not.blank}")
    private Especialidade especialidade;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "consultorio_id", referencedColumnName = "id")
    @NotBlank(message = "{consultorio.not.blank}")
    private Consultorio consultorio;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "medico_id", referencedColumnName = "id")
    @NotBlank(message = "{medico.not.blank}")
    private Medico medico;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "paciente_id", referencedColumnName = "id")
    @NotBlank(message = "{paciente.not.blank}")
    private Paciente paciente;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "tipoagendamento_id", referencedColumnName = "id")
    @NotBlank(message = "Tipo de agendamento não deve estar em branco.")
    private TipoAgendamento tipoAgendamento;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "convenio_id", referencedColumnName = "id")
    @NotBlank(message = "{convenio.not.blank}")
    private Convenio convenio;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "situacao_id", referencedColumnName = "id")
    @NotBlank(message = "Situação da agenda não deve estar em branco.")
    private SituacaoAgenda situacaoAgenda;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "usuario_id", referencedColumnName = "id")
    @NotBlank(message = "{usuario.not.blank}")
    private Usuario usuario;

    @Column(columnDefinition = "boolean default false")
    private boolean retorno;

    @NotBlank(message = "Data da agenda não deve estar em branco.")
    private String dt_agenda;

    @Length(max = 8, message = "Hora inicial deve ser informada no formato HH:MM:SS.")
    @NotBlank(message = "Hora inicial não deve estar em branco.")
    private String hr_inicial;

    @NotBlank(message = "Hora final não deve estar em branco.")
    @Length(max = 8, message = "Hora final deve ser informada no formato HH:MM:SS.")
    private String hr_final;

    @Length(max = 500, message = "Limite máximo de observações para o campo nome é de 500 caracteres.")
    private String observacoes;
}
