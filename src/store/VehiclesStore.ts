import { v4 as uuidv4 } from 'uuid';
import { ActionContext } from 'vuex';
import { indexedUpdaters } from './util';
import { RootState } from './TypeDefs';

interface Vehicle {
  id: number | null;
  model: string;
  handlingStreet: number;
  handlingOffroad: number;
  speed: number;
  acceleration: number;
  topSpeed: number;
  body: number;
  armor: number;
  seats: number;
  pilot: number;
  sensor: number;
  notes: string;
}

interface VehiclesState {
  items: Record<string, Vehicle>;
}

const initialState: VehiclesState = {
  items: {},
};

const VehiclesStore = {
  namespaced: true,
  state: initialState,
  actions: {
    // return the index of the newly added item
    initNewInstance({ getters, commit }:
                            ActionContext<VehiclesState, RootState>): Promise<string> {
      const itemData = { ...getters.newItem };
      const uuid = uuidv4();
      commit('addVehicle', [uuid, itemData]);
      return Promise.resolve(uuid);
    },
  },
  mutations: {
    addVehicle(state: VehiclesState, [uuid, vehicleData]: [string, Vehicle]) {
      state.items[uuid] = vehicleData;
    },
    ...indexedUpdaters(
      ['model',
        'handlingStreet',
        'handlingOffroad',
        'speed',
        'acceleration',
        'topSpeed',
        'body',
        'armor',
        'seats',
        'pilot',
        'sensor',
        'notes',
      ],
    ),
  },
  getters: {
    newItem(): Vehicle {
      return {
        id: null,
        model: '',
        handlingOffroad: 0,
        handlingStreet: 0,
        speed: 0,
        topSpeed: 0,
        acceleration: 0,
        body: 0,
        armor: 0,
        seats: 0,
        pilot: 0,
        sensor: 0,
        notes: '',
      };
    },
  },
};

export default VehiclesStore;
