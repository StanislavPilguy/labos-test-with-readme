import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
//import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

// import {
//   CreatePatients,
//   CreatePatientsSuccess,
//   CreatePatientsFail,
//   SearchAllPatientsEntities,
//   SearchAllPatientsEntitiesSuccess,
//   SearchAllPatientsEntitiesFail,
//   LoadPatientsById,
//   LoadPatientsByIdSuccess,
//   LoadPatientsByIdFail,
//   UpdatePatients,
//   UpdatePatientsSuccess,
//   UpdatePatientsFail,
//   DeletePatientsById,
//   DeletePatientsByIdSuccess,
//   DeletePatientsByIdFail
// } from './patients.actions';
// import { generatePatients, generatePatientsArray } from './patients.model';

import { PatientsService } from './patients.service';
import { PatientsEffects } from './patients.effects';

describe('PatientsEffects', () => {
  let actions: Observable<any>;
  let effects: PatientsEffects;
  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PatientsEffects,
        provideMockActions(() => actions),
        {
          provide: PatientsService,
          useValue: jasmine.createSpyObj('service', [
            'create',
            'search',
            'getById',
            'update',
            'deleteById'
          ])
        }
      ]
    });

    effects = TestBed.get(PatientsEffects);
    service = TestBed.get(PatientsService);
  });

  it('should be constructed', () => {
    expect(effects).toBeTruthy();
  });

  // describe('create', () => {
  //   it('should return CreatePatientsSuccess action with entity on success', () => {
  //     const entity = generatePatients();
  //     const insertAction = new CreatePatients({ patients: entity });
  //     const successAction = new CreatePatientsSuccess({ result: entity });
  //
  //     actions = hot('a-', { a: insertAction });
  //     service.create.and.returnValue(cold('-e|', { e: entity }));
  //     const expected = cold('-s', { s: successAction });
  //
  //     expect(effects.create).toBeObservable(expected);
  //   });
  //
  //   it('should return CreatePatientsFail with error object on failure', () => {
  //     const entity = generatePatients();
  //     const insertAction = new CreatePatients({ patients: entity });
  //     const failAction = new CreatePatientsFail({ error: 'fail' });
  //
  //     actions = hot('i-', { i: insertAction });
  //     service.create.and.returnValue(cold('-#|', {}, { message: 'fail'}));
  //     const expected = cold('-f', { f: failAction });
  //
  //     expect(effects.create).toBeObservable(expected);
  //   });
  // });

  // describe('search', () => {
  //   it('should return SearchAllPatientsEntitiesSuccess action with entities on success', () => {
  //     const entities = generatePatientsArray();
  //     const searchAction = new SearchAllPatientsEntities();
  //     const successAction = new SearchAllPatientsEntitiesSuccess({ result: entities });
  //
  //     actions = hot('a-', { a: searchAction });
  //     service.search.and.returnValue(cold('-e|', { e: entities }));
  //     const expected = cold('-s', { s: successAction });
  //
  //     expect(effects.search).toBeObservable(expected);
  //   });
  //
  //   it('should return SearchAllPatientsEntitiesFail with error object on failure', () => {
  //     const searchAction = new SearchAllPatientsEntities();
  //     const failAction = new SearchAllPatientsEntitiesFail({ error: 'fail' });
  //
  //     actions = hot('a-', { a: searchAction });
  //     service.search.and.returnValue(cold('-#|', {}, { message: 'fail'}));
  //     const expected = cold('-f', { f: failAction });
  //
  //     expect(effects.search).toBeObservable(expected);
  //   });
  // });

  // describe('loadById', () => {
  //   it('should return LoadPatientsByIdSuccess action with entity on success', () => {
  //     const entity = generatePatients();
  //     const loadAction = new LoadPatientsById({ id: entity.id });
  //     const successAction = new LoadPatientsByIdSuccess({ result: entity});
  //
  //     actions = hot('a-', { a: loadAction });
  //     service.getById.and.returnValue(cold('-e|', { e: entity }));
  //     const expected = cold('-s', { s: successAction });
  //
  //     expect(effects.loadById).toBeObservable(expected);
  //   });
  //
  //   it('should return LoadPatientsByIdFail with error object on failure', () => {
  //     const entity = generatePatients();
  //     const loadAction = new LoadPatientsById({ id: entity.id });
  //     const failAction = new LoadPatientsByIdFail({ error: 'fail' });
  //
  //     actions = hot('a-', { a: loadAction });
  //     service.getById.and.returnValue(cold('-#|', {}, { message: 'fail'}));
  //     const expected = cold('-f', { f: failAction });
  //
  //     expect(effects.loadById).toBeObservable(expected);
  //   });
  // });

  // describe('update', () => {
  //   it('should return UpdatePatientsSuccess action with entity on success', () => {
  //     const entity = generatePatients();
  //     const updateAction = new UpdatePatients({ patients: entity });
  //     const successAction = new UpdatePatientsSuccess({ update: {
  //       id: entity.id,
  //       changes: entity
  //     }});
  //
  //     actions = hot('a-', { a: updateAction });
  //     service.update.and.returnValue(cold('-e|', { e: entity }));
  //     const expected = cold('-s', { s: successAction });
  //
  //     expect(effects.update).toBeObservable(expected);
  //   });
  //
  //   it('should return UpdatePatientsFail with error object on failure', () => {
  //     const entity = generatePatients();
  //     const updateAction = new UpdatePatients({ patients: entity });
  //     const failAction = new UpdatePatientsFail({ error: 'fail' });
  //
  //     actions = hot('a-', { a: updateAction });
  //     service.update.and.returnValue(cold('-#|', {}, { message: 'fail'}));
  //     const expected = cold('-f', { f: failAction });
  //
  //     expect(effects.update).toBeObservable(expected);
  //   });
  // });

  // describe('delete', () => {
  //   it('should return DeletePatientsByIdSuccess action with entity ID on success', () => {
  //     const entity = generatePatients();
  //     const deleteAction = new DeletePatientsById({ id: entity.id });
  //     const successAction = new DeletePatientsByIdSuccess({ id: entity.id });
  //
  //     actions = hot('a-', { a: deleteAction });
  //     service.deleteById.and.returnValue(cold('-e|', { e: entity.id }));
  //     const expected = cold('-s', { s: successAction });
  //
  //     expect(effects.delete).toBeObservable(expected);
  //   });
  //
  //   it('should return DeletePatientsByIdFail with error object on failure', () => {
  //     const entity = generatePatients();
  //     const deleteAction = new DeletePatientsById({ id: entity.id });
  //     const failAction = new DeletePatientsByIdFail({ error: 'fail' });
  //
  //     actions = hot('a-', { a: deleteAction });
  //     service.deleteById.and.returnValue(cold('-#|', {}, { message: 'fail'}));
  //     const expected = cold('-f', { f: failAction });
  //
  //     expect(effects.delete).toBeObservable(expected);
  //   });
  // });

});
