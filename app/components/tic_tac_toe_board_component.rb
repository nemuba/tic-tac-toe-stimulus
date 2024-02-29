# frozen_string_literal: true

class TicTacToeBoardComponent < ViewComponent::Base
  attr_reader :cells

  def initialize
    @cells = (1..9).to_a.map { |_| TicTacToeCellComponent.new }
    super
  end
end
