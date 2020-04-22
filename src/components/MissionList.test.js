import React from 'react';
import { render } from '@testing-library/react';

import MissionsList from './MissionsList';

test("MissionList renders", () => {
    render(<MissionsList missions={[]} />);
    // arrange
    // act
    // assert
});

test('render MissionsList with valid Missions', () => {
    const mockData = [{mission_id:'id1', mission_name:"mission one"}];
    const {queryAllByText, rerender} = render(<MissionsList missions={[]} />);

    let allMissions = queryAllByText(/mission/i);

    expect(allMissions).toHaveLength(0);
    expect(allMissions).toStrictEqual([]);

    rerender(<MissionsList missions={mockData} />);
    allMissions = queryAllByText(/mission/i);
    expect(allMissions).toHaveLength(1);
});