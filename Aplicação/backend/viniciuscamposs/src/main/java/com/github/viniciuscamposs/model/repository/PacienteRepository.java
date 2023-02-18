package com.github.viniciuscamposs.model.repository;

import com.github.viniciuscamposs.model.entity.Paciente;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PacienteRepository extends CrudRepository<Paciente, Integer> {

    @Override
    <S extends Paciente> S save(S entity);

    @Override
    boolean existsById(Integer integer);

    @Override
    Iterable<Paciente> findAllById(Iterable<Integer> integers);

    @Override
    Iterable<Paciente> findAll();
}
