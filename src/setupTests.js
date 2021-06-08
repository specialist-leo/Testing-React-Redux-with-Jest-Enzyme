import Enzyme from 'enzyme'; // 혹은 import { configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new EnzymeAdapter(), // 어뎁터를 enzymeAdapter의 새 인스턴스로 생성
  disableLifecycleMethods: true, // 수명주기 메서드 비활성화
});
