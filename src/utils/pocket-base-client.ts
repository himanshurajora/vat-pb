import PocketBase from 'pocketbase';
import { serverUrl } from '../config/url.config';

export const pbClient = new PocketBase(serverUrl);
