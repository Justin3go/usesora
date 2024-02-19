import { soraData } from '../data/soraList';

export default defineEventHandler(async (event) => {
  return soraData;
})
