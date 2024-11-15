import { index } from './index';

describe('index', () => {
	const consoleMock = vi.spyOn(console, 'log').mockImplementation(() => undefined);

	afterAll(() => {
		consoleMock.mockReset();
	});

	it('should output to console', () => {
		index();
		expect(consoleMock).toHaveBeenCalledWith('works');
		expect(consoleMock).toHaveBeenCalledTimes(1);
	});
});
