import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  actionCreators
} from './store/index'
import {
  DetailWrapper,
  DetailTitle,
  DetailContent,
} from './styled'

class Detail extends Component {

  render() {
    console.log(this.props.match.params.id);
    const { detail } = this.props;
    return (
      <DetailWrapper>
        <DetailTitle>{ detail.get('title') }</DetailTitle>
        <DetailContent dangerouslySetInnerHTML={{__html: detail.get('content')}}>
          {/*
            <img alt="bannerImg" src="https://upload-images.jianshu.io/upload_images/14603954-0565292e05cb3339?imageMogr2/auto-orient/strip%7CimageView2/2/w/600/format/webp" />
            <p>在如今的职业生涯，</p>
            <p>为什么你比别人努力工资却不见涨？为什么每天忙到半夜还是不被上级看好？</p>
            <p>为什么同样的工作，自己却总是收效甚微？</p>
            <p>其实，不是你不够努力，也不是你比别人差，是因为是你的学习方法出了大问题。</p>
            <p>因为有很多朋友在后台跟我说不知道该怎样高效率学习，所以这一期我把我珍藏多年的提高生活质量和效率的软件，给大家分享一些提高学习效率的APP，相信我，看完你肯定会有收获</p>
            */}
        </DetailContent>
      </DetailWrapper>
    );
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }



};

const mapStateToProps = (state) => ({
  detail: state.getIn(['detail', 'detail'])
});

const mapDispatchToProps = (dispatch) => {
  return {
    getDetail: (id) => {
      dispatch(actionCreators.getDetail(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
