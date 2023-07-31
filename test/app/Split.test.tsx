import renderer from 'react-test-renderer';
import Split from "../../app/Split";

describe('Split', () => {
    it('should render', () => {
        const tree = renderer.create(<Split/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});