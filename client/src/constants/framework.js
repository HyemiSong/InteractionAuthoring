const AuthIntents = {
    'Connects visual objects and changes in visual properties': ['Select', 'Reconfigure', 'Annotate'],
    'Connects visual objects and changes in visible area': ['Steer'],
    'Connects visual objects and changes in visual mapping': ['Enter/Exit', 'Encode'],
    'Connects visual objects and changes in data': ['Filter', 'Derive', 'Abstract/Elaborate']
}

const Intents = {
'Select': ['Point Select', 'Multi-Select', 'Range Select', 'Generalized Select', 'Linked Select', 'Deselect'],
'Steer': ['Geometric Zoom', 'Pan', 'Toggle between Different Views', 'Navigate to Previous/Next Scene or Section'],
'Reconfigure': ['Reposition', 'Sort', 'Organize view'],
'Annotate': ['Show/Hide Reference Lines', 'Show/Hide Tooltip Container'],
'Enter/Exit': ['Click to add Data Points'],
'Encode': ['Change Field in Encoding', 'Change chart type'],
'Filter': ['Dynamic Queries', 'Show or Hide related Items', 'Cross-filter', 'Details on Demand'],
'Derive': ['Recompute Field with New Baseline', 'Change aggregator'],
'Abstract/Elaborate': ['Move Up/Down in a Hierarchy', 'Drill Down/Roll Up']
}

const Components = 
['Mouse Coordinates', 'State Variables', 'Visual Object', 'Visual Channel', 'Data', 'Encoding', 'Scale', 
'Event', 'Listener', 'Target', 'Hit Object',
'Camera',
'Predicate', 'Field Reference', 'Component Reference',
'Predicate evaluator', 'Order evaluator', 'Distance evaluator',
'Evaluation Scale']

export { AuthIntents, Intents, Components };