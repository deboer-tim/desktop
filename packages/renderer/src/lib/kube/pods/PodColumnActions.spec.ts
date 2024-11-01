/**********************************************************************
 * Copyright (C) 2024 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ***********************************************************************/

import '@testing-library/jest-dom/vitest';

import type { ContainerInfo, Port } from '@podman-desktop/api';
import { render, screen } from '@testing-library/svelte';
import { afterEach, beforeEach, expect, test, vi } from 'vitest';

import PodColumnActions from './PodColumnActions.svelte';
import type { PodUI } from './PodUI';

const listContainersMock = vi.fn();
const getContributedMenusMock = vi.fn();

beforeEach(() => {
  (window as any).listContainers = listContainersMock;
  listContainersMock.mockResolvedValue([
    { Id: 'pod', Ports: [{ PublicPort: 8080 } as Port] as Port[] } as ContainerInfo,
  ]);

  (window as any).getContributedMenus = getContributedMenusMock;
  getContributedMenusMock.mockImplementation(() => Promise.resolve([]));
});

afterEach(() => {
  vi.resetAllMocks();
  vi.clearAllMocks();
});

test('Expect action buttons', async () => {
  const pod: PodUI = {
    name: '',
    status: '',
    selected: false,
    containers: [],
    namespace: '',
  };

  render(PodColumnActions, { object: pod });

  const buttons = await screen.findAllByRole('button');
  expect(buttons).toHaveLength(4);
});
