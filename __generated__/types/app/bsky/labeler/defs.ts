/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type ValidationResult, BlobRef } from "npm:@atproto/lexicon"
import { CID } from "npm:multiformats/cid"
import { validate as _validate } from '../../../../lexicons.ts'
import {
  type $Typed,
  is$typed as _is$typed,
  type OmitKey,
} from '../../../../util.ts'
import type * as ComAtprotoLabelDefs from '../../../com/atproto/label/defs.ts'
import type * as AppBskyActorDefs from '../actor/defs.ts'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.bsky.labeler.defs'

export interface LabelerView {
  $type?: 'app.bsky.labeler.defs#labelerView'
  cid: string
  uri: string
  labels?: ComAtprotoLabelDefs.Label[]
  viewer?: LabelerViewerState
  creator: AppBskyActorDefs.ProfileView
  indexedAt: string
  likeCount?: number
}

const hashLabelerView = 'labelerView'

export function isLabelerView<V>(v: V) {
  return is$typed(v, id, hashLabelerView)
}

export function validateLabelerView<V>(v: V) {
  return validate<LabelerView & V>(v, id, hashLabelerView)
}

export interface LabelerPolicies {
  $type?: 'app.bsky.labeler.defs#labelerPolicies'
  /** The label values which this labeler publishes. May include global or custom labels. */
  labelValues: ComAtprotoLabelDefs.LabelValue[]
  /** Label values created by this labeler and scoped exclusively to it. Labels defined here will override global label definitions for this labeler. */
  labelValueDefinitions?: ComAtprotoLabelDefs.LabelValueDefinition[]
}

const hashLabelerPolicies = 'labelerPolicies'

export function isLabelerPolicies<V>(v: V) {
  return is$typed(v, id, hashLabelerPolicies)
}

export function validateLabelerPolicies<V>(v: V) {
  return validate<LabelerPolicies & V>(v, id, hashLabelerPolicies)
}

export interface LabelerViewerState {
  $type?: 'app.bsky.labeler.defs#labelerViewerState'
  like?: string
}

const hashLabelerViewerState = 'labelerViewerState'

export function isLabelerViewerState<V>(v: V) {
  return is$typed(v, id, hashLabelerViewerState)
}

export function validateLabelerViewerState<V>(v: V) {
  return validate<LabelerViewerState & V>(v, id, hashLabelerViewerState)
}

export interface LabelerViewDetailed {
  $type?: 'app.bsky.labeler.defs#labelerViewDetailed'
  cid: string
  uri: string
  labels?: ComAtprotoLabelDefs.Label[]
  viewer?: LabelerViewerState
  creator: AppBskyActorDefs.ProfileView
  policies: LabelerPolicies
  indexedAt: string
  likeCount?: number
}

const hashLabelerViewDetailed = 'labelerViewDetailed'

export function isLabelerViewDetailed<V>(v: V) {
  return is$typed(v, id, hashLabelerViewDetailed)
}

export function validateLabelerViewDetailed<V>(v: V) {
  return validate<LabelerViewDetailed & V>(v, id, hashLabelerViewDetailed)
}
