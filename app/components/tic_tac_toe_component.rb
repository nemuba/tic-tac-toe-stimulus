# frozen_string_literal: true

class TicTacToeComponent < ViewComponent::Base
  attr_reader :board

  def initialize
    @board = TicTacToeBoardComponent.new
    super
  end
end
