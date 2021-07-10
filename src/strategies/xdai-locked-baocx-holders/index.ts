import { strategy as baocxStakersAndHoldersStrategy } from '../xdai-baocx-stakers-and-holders';

export const author = 'fabiaz84';
export const version = '0.1.0';

export async function strategy(
  space,
  network,
  provider,
  addresses,
  options,
  snapshot
) {
  return baocxStakersAndHoldersStrategy (
    space,
    network,
    provider,
    addresses,
    { ...options, userType: 'lockedBaocxes'},
    snapshot
  );
}
