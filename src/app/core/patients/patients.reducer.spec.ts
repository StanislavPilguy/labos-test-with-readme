import {
  Patients,
  generatePatients,
  generatePatientsMap,
  generatePatientsArray
} from './patients.model';
import * as actions from './patients.actions';
import {
  patientsReducer,
  initialPatientsState,
  getSelectedId,
  getLoading,
  getError,
  getQuery
} from './patients.reducer';
import { Update } from '@ngrx/entity';

const INITIAL_STATE_WITH_ERROR = {
  ...initialPatientsState,
  error: 'some error'
};
const BLANK_ERROR_MESSAGE = '';

describe('patientsReducer', () => {
  describe('upon an undefined action', () => {
    it('should return the default state upon an undefined action', () => {
      const action = { type: 'NOT DEFINED' } as any;

      expect(patientsReducer(initialPatientsState, action)).toEqual(initialPatientsState);
    });
  });

  describe('upon CreatePatients', () => {
    it('should set loading to true and clear any error', () => {
      const action = new actions.CreatePatients({ patients: generatePatients() });

      expect(patientsReducer(INITIAL_STATE_WITH_ERROR, action)).toEqual({
        ...initialPatientsState,
        loading: true,
        error: BLANK_ERROR_MESSAGE
      });
    });
  });

  describe('upon CreatePatientsSuccess', () => {
    it('should add the given Patients, set loading to false, and clear any error', () => {
      const result = generatePatients();
      const action = new actions.CreatePatientsSuccess({ result });

      expect(patientsReducer(INITIAL_STATE_WITH_ERROR, action)).toEqual({
        ...initialPatientsState,
        ...generatePatientsMap([result]),
        loading: false,
        error: BLANK_ERROR_MESSAGE
      });
    });
  });

  describe('upon CreatePatientsFail', () => {
    it('should set loading to true and echo the error', () => {
      const error = 'test create error';
      const action = new actions.CreatePatientsFail({ error });

      expect(patientsReducer(initialPatientsState, action)).toEqual({
        ...initialPatientsState,
        loading: false,
        error: `Patients create failed: ${error}`
      });
    });
  });

  describe('upon SearchAllPatientsEntities', () => {
    it('should remove Patients entities, set loading to true, and clear any error', () => {
      const initialPatientsStateWithPatientsEntities = {
        ...INITIAL_STATE_WITH_ERROR,
        ...generatePatientsMap()
      };
      const action = new actions.SearchAllPatientsEntities();

      expect(patientsReducer(initialPatientsStateWithPatientsEntities, action)).toEqual({
        ...initialPatientsState,
        loading: true,
        error: BLANK_ERROR_MESSAGE
      });
    });
  });

  describe('upon SearchAllPatientsEntitiesSuccess', () => {
    it('should add Patients entities, set loading to false, and clear any error', () => {
      const result = generatePatientsArray();
      const action = new actions.SearchAllPatientsEntitiesSuccess({ result });

      expect(patientsReducer(INITIAL_STATE_WITH_ERROR, action)).toEqual({
        ...initialPatientsState,
        ...generatePatientsMap(result),
        loading: false,
        error: BLANK_ERROR_MESSAGE
      });
    });
  });

  describe('upon SearchAllPatientsEntitiesFail', () => {
    it('should set loading to false and echo the error', () => {
      const error = 'test search error';
      const action = new actions.SearchAllPatientsEntitiesFail({ error });

      expect(patientsReducer(initialPatientsState, action)).toEqual({
        ...initialPatientsState,
        loading: false,
        error: `Patients search failed: ${error}`
      });
    });
  });

  describe('upon LoadPatientsById', () => {
    it('should remove patients entities, set selected id, and clear any error', () => {
      const id = 8675309;
      const initialPatientsStateWithPatientsEntities = {
        ...INITIAL_STATE_WITH_ERROR,
        ...generatePatientsMap()
      };
      const action = new actions.LoadPatientsById({ id });

      expect(patientsReducer(initialPatientsStateWithPatientsEntities, action)).toEqual({
        ...initialPatientsState,
        selectedId: id,
        loading: true,
        error: BLANK_ERROR_MESSAGE
      });
    });
  });

  describe('upon LoadPatientsByIdSuccess', () => {
    it('should add the given Patients, set loading to false, and clear any error', () => {
      const result = generatePatients();
      const action = new actions.LoadPatientsByIdSuccess({ result });

      expect(patientsReducer(INITIAL_STATE_WITH_ERROR, action)).toEqual({
        ...initialPatientsState,
        ...generatePatientsMap([result]),
        loading: false,
        error: BLANK_ERROR_MESSAGE
      });
    });
  });

  describe('upon LoadPatientsByIdFail', () => {
    it('should set loading to false and echo the error', () => {
      const error = 'test load by id error';
      const action = new actions.LoadPatientsByIdFail({ error });

      expect(patientsReducer(initialPatientsState, action)).toEqual({
        ...initialPatientsState,
        loading: false,
        error: `Patients load failed: ${error}`
      });
    });
  });

  describe('upon UpdatePatients', () => {
    it('should set loading to true and clear any errior', () => {
      const patients = generatePatients();
      const action = new actions.UpdatePatients({ patients });

      expect(patientsReducer(INITIAL_STATE_WITH_ERROR, action)).toEqual({
        ...initialPatientsState,
        loading: true,
        error: BLANK_ERROR_MESSAGE
      });
    });
  });

  describe('upon UpdatePatientsSuccess', () => {
    it('should add the given Patients, set loading to false, and clear any error', () => {
      const patients = generatePatients();
      const initialPatientsStateWithPatients = {
        ...INITIAL_STATE_WITH_ERROR,
        ...generatePatientsMap([patients])
      };
      const updatedPatients = {
        ...patients,
        name: patients.name + ' EDITED',
        description: patients.description + ' EDITED'
      };
      const update = {
        id: updatedPatients.id,
        changes: updatedPatients
      } as Update<Patients>;
      const action = new actions.UpdatePatientsSuccess({ update });

      expect(patientsReducer(initialPatientsStateWithPatients, action)).toEqual({
        ...initialPatientsStateWithPatients,
        ...generatePatientsMap([updatedPatients]),
        loading: false,
        error: BLANK_ERROR_MESSAGE
      });
    });
  });

  describe('upon UpdatePatientsFail', () => {
    it('should set loading to false and echo the error', () => {
      const error = 'test update error';
      const action = new actions.UpdatePatientsFail({ error });

      expect(patientsReducer(initialPatientsState, action)).toEqual({
        ...initialPatientsState,
        loading: false,
        error: `Patients update failed: ${error}`
      });
    });
  });

  describe('upon DeletePatientsById', () => {
    it('should set the id, set loading to true, and clear any error', () => {
      const id = 4815162342;
      const action = new actions.DeletePatientsById({ id });

      expect(patientsReducer(INITIAL_STATE_WITH_ERROR, action)).toEqual({
        ...initialPatientsState,
        selectedId: id,
        loading: true,
        error: BLANK_ERROR_MESSAGE
      });
    });
  });

  describe('upon DeletePatientsByIdSuccess', () => {
    it('should remove the id-given patients, set loading to false, and clear any error', () => {
      const id = 18009453669;
      const patientsToBeRemoved = generatePatients(id);
      const expectedPatientsEntities = generatePatientsArray();
      const patientsEntitiesWithPatientsToBeRemoved = [
        ...expectedPatientsEntities,
        patientsToBeRemoved
      ];
      const initialPatientsStateWithAllPatientsEntities = {
        ...INITIAL_STATE_WITH_ERROR,
        ...generatePatientsMap(patientsEntitiesWithPatientsToBeRemoved)
      };
      const action = new actions.DeletePatientsByIdSuccess({ id });

      expect(
        patientsReducer(initialPatientsStateWithAllPatientsEntities, action)
      ).toEqual({
        ...initialPatientsStateWithAllPatientsEntities,
        ...generatePatientsMap(expectedPatientsEntities),
        loading: false,
        error: BLANK_ERROR_MESSAGE
      });
    });
  });

  describe('upon DeletePatientsByIdFail', () => {
    it('should set loading to false and echo the error', () => {
      const error = 'test delete error';
      const action = new actions.DeletePatientsByIdFail({ error });

      expect(patientsReducer(initialPatientsState, action)).toEqual({
        ...initialPatientsState,
        loading: false,
        error: `Patients delete failed: ${error}`
      });
    });
  });

  describe('upon SetSearchQuery', () => {
    it('should set the query', () => {
      const query = {
        filter: 'someFilter',
        sorting: 'someSort',
        limit: 1000000000000,
        page: 888888
      };
      const action = new actions.SetSearchQuery(query);

      expect(patientsReducer(initialPatientsState, action)).toEqual({
        ...initialPatientsState,
        query
      });
    });
  });

  describe('upon SelectPatientsById', () => {
    it('should set the id and clear any error', () => {
      const id = 73;
      const action = new actions.SelectPatientsById({ id });

      expect(patientsReducer(INITIAL_STATE_WITH_ERROR, action)).toEqual({
        ...initialPatientsState,
        selectedId: id,
        error: BLANK_ERROR_MESSAGE
      });
    });
  });
});

describe('getters', () => {
  describe('getSelectedId', () => {
    it('should return the selected id', () => {
      expect(getSelectedId(initialPatientsState)).toEqual(initialPatientsState.selectedId);
    });
  });
  describe('getLoading', () => {
    it('should return the selected id', () => {
      expect(getLoading(initialPatientsState)).toEqual(initialPatientsState.loading);
    });
  });
  describe('getError', () => {
    it('should return the selected id', () => {
      expect(getError(INITIAL_STATE_WITH_ERROR))
        .toEqual(INITIAL_STATE_WITH_ERROR.error);
    });
  });
  describe('getQuery', () => {
    it('should return the selected id', () => {
      expect(getQuery(initialPatientsState))
        .toEqual(initialPatientsState.query);
    });
  });
});
