App = Ember.Application.create({
  LOG_TRANSITIONS:          true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_BINDINGS:             true,
  LOG_ACTIVE_GENERATION:    true,
  LOG_VIEW_LOOKUPS:         true
})

App.deferReadiness()