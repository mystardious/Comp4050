import { UserOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import {
  ApplyButton,
  DeleteButton,
  EditButton,
  MarkCompleteButton,
} from '../common/Button'
import './Card.css'

export class AllTaskCard extends React.Component {
  render() {
    console.log(this.props.data)
    return (
      <div className="box">
        <div className="card-header">
          <div className="card-col1">
            <div className="flex-box">
              <div>
                <h2>{this.props.data.title}</h2>
              </div>
              <div>
                <h2>#{this.props.data.category}</h2>
              </div>
            </div>
          </div>
          <div className="card-col2">
            <h2>{this.props.data.cost} Points</h2>
          </div>
        </div>

        <div className="card-body">
          <div className="card-col1">
            <p>{this.props.data.description}</p>
          </div>
          <div className="card-col2">
            <div className="top">
              <p>{this.props.data.location}</p>
              <Link
                to={{
                  pathname: '/accountProfile',
                  search: '?username=' + this.props.data.owner,
                }}
              >
                <p>
                  <UserOutlined /> {this.props.data.name}
                </p>
              </Link>
              <p>{this.props.data.status}</p>
              <p>
                <ApplyButton {...this.props}></ApplyButton>
              </p>
            </div>
            <div className="bot">
              <p>{this.props.data.time}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export class UserTaskCard extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="box">
        <div className="card-header">
          <div className="card-col1">
            <div className="flex-box">
              <div>
                <h2>{this.props.data.title}</h2>
              </div>
              <div>
                <h2>#{this.props.data.category}</h2>
              </div>
            </div>
          </div>
          <div className="card-col2">
            <h2>{this.props.data.cost} Points</h2>
          </div>
        </div>

        <div className="card-body">
          <div className="card-col1">
            <p>{this.props.data.description}</p>
          </div>
          <div className="card-col2">
            <div className="top">
              <p>{this.props.data.location}</p>
              <p>
                <UserOutlined /> {this.props.data.ownerName}
              </p>
              <p>{this.props.data.status}</p>
              <p>
                <EditButton data={this.props.data}></EditButton>
                <DeleteButton
                  {...this.props}
                  taskID={this.props.data.id}
                ></DeleteButton>
                <MarkCompleteButton
                  {...this.props}
                  data={this.props.data}
                ></MarkCompleteButton>
              </p>
            </div>
            <div className="bot">
              <p>{this.props.data.time}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export class OtherUserTaskCard extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="box">
        <div className="card-header">
          <div className="card-col1">
            <div className="flex-box">
              <div>
                <h2>{this.props.data.title}</h2>
              </div>
              <div>
                <h2>#{this.props.data.category}</h2>
              </div>
            </div>
          </div>
          <div className="card-col2">
            <h2>{this.props.data.cost} Points</h2>
          </div>
        </div>

        <div className="card-body">
          <div className="card-col1">
            <p>{this.props.data.description}</p>
          </div>
          <div className="card-col2">
            <div className="top">
              <p>{this.props.data.location}</p>
              <p>
                <UserOutlined /> {this.props.data.ownerName}
              </p>
              <p>{this.props.data.status}</p>
              <p>
                <ApplyButton {...this.props} />
              </p>
            </div>
            <div className="bot">
              <p>{this.props.data.time}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}