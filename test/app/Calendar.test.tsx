import Calendar from "../../app/calendar/Calendar";
import renderer from 'react-test-renderer';

describe('Calendar', () => {
    it('should render', () => {
        const tree = renderer.create(<Calendar/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});