import { HttpAgent, Actor } from '@dfinity/agent';
import { idlFactory } from '../../declarations/fresh_connect_backend';

const agent = new HttpAgent({ host: 'http://localhost:8000' });

export const createActor = (canisterId, options = {}) => {
  return Actor.createActor(idlFactory, {
    agent,
    canisterId,
    ...options,
  });
};
