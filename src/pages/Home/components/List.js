import React, {  Component } from 'react';
import { connect } from 'react-redux';
// import { toJS } from 'immutable';
import { Link } from 'react-router-dom';
import {
  ListItem,
  ListInfo
} from '../style'

class List extends Component {
  render() {
    const { list } = this.props;
    // 把immutable数组转化为普通数组
    const newList = list.toJS();
    return (
      <div>
      {
        newList.map(item => {
          return (
          <Link key={item.id} to={'detail/' + item.id} >
            <ListItem key={item.id}>
              <img alt=""
                className="listPic"
                src={item.imgUrl} />
              <ListInfo >
                <h3 className="title">
                  {item.title}
                </h3>
                <p className="desc">
                  {item.desc}
                </p>
              </ListInfo>
            </ListItem>
          </Link>
          )
        })
      }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.get('home').get('articleList')
});

export default connect(mapStateToProps, null)(List);
