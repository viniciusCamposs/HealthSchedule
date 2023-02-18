package com.github.viniciuscamposs.model.repository;

import com.github.viniciuscamposs.model.entity.Empresa;
import org.springframework.data.repository.CrudRepository;

public interface EmpresaRepository extends CrudRepository<Empresa, Integer> {

    @Override
    <S extends Empresa> S save(S entity);
}
