import React, {  Component } from 'react';
import { connect } from 'react-redux';
import {
  TopicWrapper,
  TopicItem,
  TopicFont
} from '../style'


class Topic extends Component {
  render() {
    const { list } = this.props;
    return (
      <TopicWrapper>
        { list.map(item => {
          return (
            <TopicItem key={item.get('id')}>
              <img
                className="TopicImg"
                alt=""
                src={ item.get('imgUrl') }
               />
              <TopicFont>
                {item.get('title')}
              </TopicFont>
            </TopicItem>
          )
        }) }
      </TopicWrapper>
    );
  }
}
const mapStateToProps = (state) => ({
  list: state.get('home').get('topicList')
});
// 暂时不用引入，不需要非操作数据
// const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, null)(Topic);
